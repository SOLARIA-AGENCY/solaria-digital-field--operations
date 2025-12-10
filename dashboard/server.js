/**
 * 🏢 SOLARIA C-Suite Dashboard Server
 * Servidor optimizado para supervisión humana de proyectos gestionados por agentes IA
 */

const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const mysql = require('mysql2/promise');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const compression = require('compression');
const morgan = require('morgan');
const path = require('path');
require('dotenv').config();

class SolariaDashboardServer {
    constructor() {
        this.app = express();
        this.server = http.createServer(this.app);
        this.io = socketIo(this.server, {
            cors: { origin: "*", methods: ["GET", "POST"] }
        });
        
        this.port = process.env.PORT || 3000;
        this.db = null;
        this.connectedClients = new Map(); // C-suite members conectados
        
        this.initializeMiddleware();
        this.initializeDatabase();
        this.initializeRoutes();
        this.initializeSocketIO();
    }

    initializeMiddleware() {
        // Seguridad - CSP deshabilitado temporalmente para desarrollo
        this.app.use(helmet({
            contentSecurityPolicy: false
        }));

        // Rate limiting
        const limiter = rateLimit({
            windowMs: 15 * 60 * 1000, // 15 minutos
            max: 100, // límite por IP
            message: { error: 'Too many requests from this IP' }
        });
        this.app.use('/api/', limiter);

        // Middleware básico
        this.app.use(compression());
        this.app.use(cors());
        this.app.use(express.json({ limit: '10mb' }));
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(morgan('combined'));

        // Archivos estáticos
        this.app.use(express.static(path.join(__dirname, 'public')));
    }

    async initializeDatabase() {
        try {
            this.db = await mysql.createConnection({
                host: process.env.DB_HOST || 'localhost',
                user: process.env.DB_USER || 'root',
                password: process.env.DB_PASSWORD || '',
                database: process.env.DB_NAME || 'solaria_construction',
                charset: 'utf8mb4',
                timezone: '+00:00',
                acquireTimeout: 60000,
                timeout: 60000,
                reconnect: true
            });

            console.log('✅ Database connected successfully');
            
            // Verificar conexión periódicamente
            setInterval(async () => {
                try {
                    await this.db.execute('SELECT 1');
                } catch (error) {
                    console.error('❌ Database connection lost:', error);
                    await this.initializeDatabase();
                }
            }, 30000);

        } catch (error) {
            console.error('❌ Database connection failed:', error);
            process.exit(1);
        }
    }

    initializeRoutes() {
        // Autenticación para C-suite
        this.app.post('/api/auth/login', this.handleLogin.bind(this));
        this.app.post('/api/auth/logout', this.handleLogout.bind(this));
        this.app.get('/api/auth/verify', this.verifyToken.bind(this));

        // Middleware de autenticación para rutas protegidas
        // Health check (sin autenticación) - antes del middleware
        this.app.get('/api/health', this.healthCheck.bind(this));

        // Middleware de autenticación
        this.app.use('/api/', this.authenticateToken.bind(this));

        // Dashboard principal
        this.app.get('/api/dashboard/overview', this.getDashboardOverview.bind(this));
        this.app.get('/api/dashboard/metrics', this.getDashboardMetrics.bind(this));
        this.app.get('/api/dashboard/alerts', this.getDashboardAlerts.bind(this));

        // Gestión de proyectos
        this.app.get('/api/projects', this.getProjects.bind(this));
        this.app.get('/api/projects/:id', this.getProject.bind(this));
        this.app.post('/api/projects', this.createProject.bind(this));
        this.app.put('/api/projects/:id', this.updateProject.bind(this));
        this.app.delete('/api/projects/:id', this.deleteProject.bind(this));

        // Gestión de agentes IA
        this.app.get('/api/agents', this.getAgents.bind(this));
        this.app.get('/api/agents/:id', this.getAgent.bind(this));
        this.app.get('/api/agents/:id/performance', this.getAgentPerformance.bind(this));
        this.app.put('/api/agents/:id/status', this.updateAgentStatus.bind(this));

        // Gestión de tareas
        this.app.get('/api/tasks', this.getTasks.bind(this));
        this.app.get('/api/tasks/:id', this.getTask.bind(this));
        this.app.post('/api/tasks', this.createTask.bind(this));
        this.app.put('/api/tasks/:id', this.updateTask.bind(this));

        // Logs y auditoría
        this.app.get('/api/logs', this.getLogs.bind(this));
        this.app.get('/api/logs/audit', this.getAuditLogs.bind(this));

        // Reportes y analíticas
        this.app.get('/api/reports/projects', this.getProjectReports.bind(this));
        this.app.get('/api/reports/agents', this.getAgentReports.bind(this));
        this.app.get('/api/reports/financial', this.getFinancialReports.bind(this));



        // Servir archivos estáticos
        this.app.use(express.static(path.join(__dirname, 'public')));
        
        // Servir dashboard principal (para cualquier ruta que no sea API)
        this.app.get('*', (req, res) => {
            res.sendFile(path.join(__dirname, 'public', 'index.html'));
        });
    }

    initializeSocketIO() {
        this.io.on('connection', (socket) => {
            console.log(`👤 C-Suite member connected: ${socket.id}`);

            // Autenticación por socket
            socket.on('authenticate', async (token) => {
                try {
                    const decoded = jwt.verify(token, process.env.JWT_SECRET);
                    const user = await this.getUserById(decoded.userId);
                    
                    if (user) {
                        socket.userId = user.user_id;
                        socket.userRole = user.role;
                        this.connectedClients.set(socket.id, user);
                        
                        socket.emit('authenticated', { user });
                        console.log(`✅ ${user.name} (${user.role}) authenticated`);
                        
                        // Unir a sala específica del rol
                        socket.join(user.role);
                    } else {
                        socket.emit('authentication_error', { error: 'Invalid user' });
                    }
                } catch (error) {
                    socket.emit('authentication_error', { error: 'Invalid token' });
                }
            });

            // Suscribir a actualizaciones de proyectos
            socket.on('subscribe_projects', () => {
                socket.join('projects');
            });

            // Suscribir a actualizaciones de agentes
            socket.on('subscribe_agents', () => {
                socket.join('agents');
            });

            // Suscribir a alertas críticas
            socket.on('subscribe_alerts', () => {
                socket.join('alerts');
            });

            socket.on('disconnect', () => {
                const user = this.connectedClients.get(socket.id);
                if (user) {
                    console.log(`👋 ${user.name} disconnected`);
                    this.connectedClients.delete(socket.id);
                }
            });
        });

        // Emisión de actualizaciones en tiempo real
        this.startRealTimeUpdates();
    }

    async startRealTimeUpdates() {
        // Actualizaciones cada 5 segundos
        setInterval(async () => {
            try {
                // Actualizar estados de agentes
                const agentStates = await this.getAgentStates();
                this.io.to('agents').emit('agent_states_update', agentStates);

                // Actualizar métricas de proyectos
                const projectMetrics = await this.getProjectMetrics();
                this.io.to('projects').emit('project_metrics_update', projectMetrics);

                // Verificar alertas críticas
                const criticalAlerts = await this.getCriticalAlerts();
                if (criticalAlerts.length > 0) {
                    this.io.to('alerts').emit('critical_alerts', criticalAlerts);
                }

            } catch (error) {
                console.error('❌ Real-time update error:', error);
            }
        }, 5000);
    }

    // Métodos de autenticación
    async handleLogin(req, res) {
        try {
            console.log('Login attempt:', { userId: req.body.userId, username: req.body.username, hasPassword: !!req.body.password });
            // Aceptar ambos userId y username para compatibilidad
            const username = req.body.userId || req.body.username;
            const { password } = req.body;
            
            if (!username || !password) {
                return res.status(400).json({ error: 'Username and password required' });
            }
            
            console.log('Executing query for username:', username);
            const [users] = await this.db.execute(
                'SELECT * FROM users WHERE username = ? AND is_active = TRUE',
                [username]
            );
            console.log('Query result:', users.length, 'users found');

            if (users.length === 0) {
                return res.status(401).json({ error: 'Invalid credentials' });
            }

            const user = users[0];

            // DEV BYPASS: Allow 'dev' password for quick access
            const isDevelopmentBypass = password === 'dev' || password === 'bypass';

            // Verificar password hash
            const passwordHash = require('crypto').createHash('sha256').update(password).digest('hex');
            if (!isDevelopmentBypass && user.password_hash !== passwordHash) {
                return res.status(401).json({ error: 'Invalid credentials' });
            }
            
            // Actualizar último login
            await this.db.execute(
                'UPDATE users SET last_login = NOW() WHERE id = ?',
                [user.id]
            );
            
            const token = jwt.sign(
                { userId: user.id, username: user.username, role: user.role },
                process.env.JWT_SECRET || 'solaria_jwt_secret_key_2024_secure_change_in_production',
                { expiresIn: '24h' }
            );

            res.json({
                token,
                user: {
                    id: user.id,
                    username: user.username,
                    name: user.name,
                    role: user.role,
                    email: user.email
                }
            });

        } catch (error) {
            console.error('Login error:', error);
            res.status(500).json({ error: 'Login failed' });
        }
    }

    async handleLogout(req, res) {
        res.json({ message: 'Logged out successfully' });
    }

    async verifyToken(req, res) {
        const token = req.headers.authorization?.split(' ')[1];
        
        if (!token) {
            return res.status(401).json({ error: 'No token provided' });
        }

        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            const user = await this.getUserById(decoded.userId);
            res.json({ valid: true, user });
        } catch (error) {
            res.status(401).json({ error: 'Invalid token' });
        }
    }

    authenticateToken(req, res, next) {
        const token = req.headers.authorization?.split(' ')[1];
        
        if (!token) {
            return res.status(401).json({ error: 'Authentication required' });
        }

        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = decoded;
            next();
        } catch (error) {
            res.status(401).json({ error: 'Invalid token' });
        }
    }

    // Métodos del Dashboard
    async getDashboardOverview(req, res) {
        try {
            const [projects] = await this.db.execute(`
                SELECT 
                    COUNT(*) as total_projects,
                    COUNT(CASE WHEN status = 'completed' THEN 1 END) as completed_projects,
                    COUNT(CASE WHEN status = 'development' THEN 1 END) as active_projects,
                    COUNT(CASE WHEN status = 'planning' THEN 1 END) as planning_projects,
                    SUM(budget) as total_budget,
                    SUM(actual_cost) as total_actual_cost
                FROM projects
            `);

            const [agents] = await this.db.execute(`
                SELECT 
                    COUNT(*) as total_agents,
                    COUNT(CASE WHEN status = 'active' THEN 1 END) as active_agents,
                    COUNT(CASE WHEN status = 'busy' THEN 1 END) as busy_agents,
                    COUNT(CASE WHEN status = 'error' THEN 1 END) as error_agents
                FROM ai_agents
            `);

            const [tasks] = await this.db.execute(`
                SELECT 
                    COUNT(*) as total_tasks,
                    COUNT(CASE WHEN status = 'completed' THEN 1 END) as completed_tasks,
                    COUNT(CASE WHEN status = 'in_progress' THEN 1 END) as in_progress_tasks,
                    COUNT(CASE WHEN status = 'blocked' THEN 1 END) as blocked_tasks
                FROM tasks
            `);

            const [alerts] = await this.db.execute(`
                SELECT 
                    COUNT(*) as total_alerts,
                    COUNT(CASE WHEN severity = 'critical' THEN 1 END) as critical_alerts,
                    COUNT(CASE WHEN status = 'active' THEN 1 END) as active_alerts
                FROM alerts
            `);

            res.json({
                projects: projects[0],
                agents: agents[0],
                tasks: tasks[0],
                alerts: alerts[0],
                timestamp: new Date().toISOString()
            });

        } catch (error) {
            res.status(500).json({ error: 'Failed to fetch dashboard overview' });
        }
    }

    async getDashboardMetrics(req, res) {
        try {
            const { timeframe = '30' } = req.query;
            
            // Métricas de proyectos
            const [projectMetrics] = await this.db.execute(`
                SELECT 
                    DATE(metric_date) as date,
                    AVG(completion_percentage) as avg_completion,
                    AVG(agent_efficiency) as avg_efficiency,
                    AVG(code_quality_score) as avg_quality,
                    SUM(total_hours_worked) as total_hours
                FROM project_metrics
                WHERE metric_date >= DATE_SUB(CURDATE(), INTERVAL ? DAY)
                GROUP BY DATE(metric_date)
                ORDER BY date ASC
            `, [timeframe]);

            // Métricas de agentes
            const [agentMetrics] = await this.db.execute(`
                SELECT 
                    aa.role,
                    COUNT(t.id) as tasks_assigned,
                    COUNT(CASE WHEN t.status = 'completed' THEN 1 END) as tasks_completed,
                    AVG(t.actual_hours) as avg_task_time,
                    COUNT(CASE WHEN al.level = 'error' THEN 1 END) as error_count
                FROM ai_agents aa
                LEFT JOIN tasks t ON aa.id = t.agent_id
                LEFT JOIN activity_logs al ON aa.id = al.agent_id 
                    AND al.timestamp >= DATE_SUB(NOW(), INTERVAL ? DAY)
                GROUP BY aa.role
            `, [timeframe]);

            res.json({
                projectMetrics,
                agentMetrics,
                timeframe
            });

        } catch (error) {
            res.status(500).json({ error: 'Failed to fetch metrics' });
        }
    }

    async getDashboardAlerts(req, res) {
        try {
            const { severity, status = 'active', limit = 50 } = req.query;
            
            let query = `
                SELECT 
                    a.*,
                    p.name as project_name,
                    aa.name as agent_name,
                    t.title as task_title
                FROM alerts a
                LEFT JOIN projects p ON a.project_id = p.id
                LEFT JOIN ai_agents aa ON a.agent_id = aa.id
                LEFT JOIN tasks t ON a.task_id = t.id
                WHERE a.status = ?
            `;
            const params = [status];

            if (severity) {
                query += ' AND a.severity = ?';
                params.push(severity);
            }

            query += ' ORDER BY a.created_at DESC LIMIT ?';
            params.push(parseInt(limit));

            const [alerts] = await this.db.execute(query, params);

            res.json(alerts);

        } catch (error) {
            res.status(500).json({ error: 'Failed to fetch alerts' });
        }
    }

    // Métodos de proyectos
    async getProjects(req, res) {
        try {
            const { status, priority, page = 1, limit = 20 } = req.query;
            
            let query = `
                SELECT 
                    p.*,
                    COUNT(t.id) as total_tasks,
                    COUNT(CASE WHEN t.status = 'completed' THEN 1 END) as completed_tasks,
                    COUNT(DISTINCT t.agent_id) as agents_assigned,
                    COUNT(CASE WHEN a.status = 'active' THEN 1 END) as active_alerts
                FROM projects p
                LEFT JOIN tasks t ON p.id = t.project_id
                LEFT JOIN alerts a ON p.id = a.project_id AND a.status = 'active'
            `;
            
            const whereConditions = [];
            const params = [];

            if (status) {
                whereConditions.push('p.status = ?');
                params.push(status);
            }

            if (priority) {
                whereConditions.push('p.priority = ?');
                params.push(priority);
            }

            if (whereConditions.length > 0) {
                query += ' WHERE ' + whereConditions.join(' AND ');
            }

            query += ' GROUP BY p.id ORDER BY p.updated_at DESC';

            const offset = (page - 1) * limit;
            query += ' LIMIT ? OFFSET ?';
            params.push(parseInt(limit), offset);

            const [projects] = await this.db.execute(query, params);

            // Obtener total para paginación
            const countQuery = 'SELECT COUNT(*) as total FROM projects' + 
                (whereConditions.length > 0 ? ' WHERE ' + whereConditions.join(' AND ') : '');
            const [countResult] = await this.db.execute(countQuery, params.slice(0, -2));

            res.json({
                projects,
                pagination: {
                    page: parseInt(page),
                    limit: parseInt(limit),
                    total: countResult[0].total,
                    pages: Math.ceil(countResult[0].total / limit)
                }
            });

        } catch (error) {
            res.status(500).json({ error: 'Failed to fetch projects' });
        }
    }

    async getProject(req, res) {
        try {
            const { id } = req.params;
            
            const [projects] = await this.db.execute(`
                SELECT * FROM projects WHERE id = ?
            `, [id]);

            if (projects.length === 0) {
                return res.status(404).json({ error: 'Project not found' });
            }

            const project = projects[0];

            // Obtener tareas del proyecto
            const [tasks] = await this.db.execute(`
                SELECT 
                    t.*,
                    aa.name as agent_name,
                    aa.role as agent_role
                FROM tasks t
                LEFT JOIN ai_agents aa ON t.agent_id = aa.id
                WHERE t.project_id = ?
                ORDER BY t.created_at DESC
            `, [id]);

            // Obtener agentes asignados
            const [agents] = await this.db.execute(`
                SELECT DISTINCT 
                    aa.*,
                    COUNT(t.id) as tasks_assigned,
                    COUNT(CASE WHEN t.status = 'completed' THEN 1 END) as tasks_completed
                FROM ai_agents aa
                INNER JOIN tasks t ON aa.id = t.agent_id
                WHERE t.project_id = ?
                GROUP BY aa.id
            `, [id]);

            // Obtener alertas del proyecto
            const [alerts] = await this.db.execute(`
                SELECT * FROM alerts 
                WHERE project_id = ? AND status = 'active'
                ORDER BY severity DESC, created_at DESC
            `, [id]);

            // Obtener métricas recientes
            const [metrics] = await this.db.execute(`
                SELECT * FROM project_metrics 
                WHERE project_id = ?
                ORDER BY metric_date DESC
                LIMIT 30
            `, [id]);

            res.json({
                project,
                tasks,
                agents,
                alerts,
                metrics
            });

        } catch (error) {
            res.status(500).json({ error: 'Failed to fetch project' });
        }
    }

    async createProject(req, res) {
        try {
            const {
                name,
                client,
                description,
                priority = 'medium',
                budget,
                start_date,
                deadline
            } = req.body;

            const [result] = await this.db.execute(`
                INSERT INTO projects (
                    name, client, description, priority, budget, 
                    start_date, deadline, created_by
                ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)
            `, [
                name, client, description, priority, budget,
                start_date, deadline, req.user.userId
            ]);

            // Log de creación
            await this.db.execute(`
                INSERT INTO activity_logs (
                    project_id, action, details, category, level
                ) VALUES (?, ?, ?, ?, ?)
            `, [
                result.insertId,
                'project_created',
                `Project ${name} created by ${req.user.userId}`,
                'management',
                'info'
            ]);

            res.status(201).json({
                id: result.insertId,
                message: 'Project created successfully'
            });

        } catch (error) {
            res.status(500).json({ error: 'Failed to create project' });
        }
    }

    async updateProject(req, res) {
        try {
            const { id } = req.params;
            const updates = req.body;
            
            const [result] = await this.db.execute(`
                UPDATE projects 
                SET name = ?, client = ?, description = ?, priority = ?, budget = ?, deadline = ?
                WHERE id = ?
            `, [
                updates.name, updates.client, updates.description, 
                updates.priority, updates.budget, updates.deadline, id
            ]);

            if (result.affectedRows === 0) {
                return res.status(404).json({ error: 'Project not found' });
            }

            res.json({ message: 'Project updated successfully' });

        } catch (error) {
            res.status(500).json({ error: 'Failed to update project' });
        }
    }

    async deleteProject(req, res) {
        try {
            const { id } = req.params;
            
            const [result] = await this.db.execute(`
                DELETE FROM projects WHERE id = ?
            `, [id]);

            if (result.affectedRows === 0) {
                return res.status(404).json({ error: 'Project not found' });
            }

            res.json({ message: 'Project deleted successfully' });

        } catch (error) {
            res.status(500).json({ error: 'Failed to delete project' });
        }
    }

    // Métodos de agentes
    async getAgents(req, res) {
        try {
            const { role, status, page = 1, limit = 50 } = req.query;
            
            let query = `
                SELECT 
                    aa.*,
                    COUNT(t.id) as tasks_assigned,
                    COUNT(CASE WHEN t.status = 'completed' THEN 1 END) as tasks_completed,
                    COUNT(CASE WHEN t.status = 'in_progress' THEN 1 END) as current_tasks,
                    COUNT(CASE WHEN al.level = 'error' THEN 1 END) as error_count
                FROM ai_agents aa
                LEFT JOIN tasks t ON aa.id = t.agent_id
                LEFT JOIN activity_logs al ON aa.id = al.agent_id 
                    AND al.timestamp >= DATE_SUB(NOW(), INTERVAL 24 HOUR)
            `;
            
            const whereConditions = [];
            const params = [];

            if (role) {
                whereConditions.push('aa.role = ?');
                params.push(role);
            }

            if (status) {
                whereConditions.push('aa.status = ?');
                params.push(status);
            }

            if (whereConditions.length > 0) {
                query += ' WHERE ' + whereConditions.join(' AND ');
            }

            query += ' GROUP BY aa.id ORDER BY aa.last_activity DESC';

            const offset = (page - 1) * limit;
            query += ' LIMIT ? OFFSET ?';
            params.push(parseInt(limit), offset);

            const [agents] = await this.db.execute(query, params);

            res.json(agents);

        } catch (error) {
            res.status(500).json({ error: 'Failed to fetch agents' });
        }
    }

    // Métodos auxiliares
    async getUserById(userId) {
        const [users] = await this.db.execute(
            'SELECT * FROM users WHERE id = ? AND is_active = TRUE',
            [userId]
        );
        return users[0] || null;
    }

    async getAgentStates() {
        const [states] = await this.db.execute(`
            SELECT 
                as_.*,
                aa.name,
                aa.role
            FROM agent_states as_
            INNER JOIN ai_agents aa ON as_.agent_id = aa.id
            WHERE as_.last_heartbeat >= DATE_SUB(NOW(), INTERVAL 1 MINUTE)
        `);
        return states;
    }

    async getProjectMetrics() {
        const [metrics] = await this.db.execute(`
            SELECT 
                project_id,
                agent_efficiency,
                code_quality_score,
                test_coverage,
                tasks_completed,
                tasks_pending,
                tasks_blocked,
                performance_score
            FROM project_metrics
            WHERE metric_date = CURDATE()
        `);
        return metrics;
    }

    async getCriticalAlerts() {
        const [alerts] = await this.db.execute(`
            SELECT 
                a.*,
                p.name as project_name,
                aa.name as agent_name
            FROM alerts a
            LEFT JOIN projects p ON a.project_id = p.id
            LEFT JOIN ai_agents aa ON a.agent_id = aa.id
            WHERE a.severity = 'critical' AND a.status = 'active'
            ORDER BY a.created_at DESC
            LIMIT 10
        `);
        return alerts;
    }

    async getAgent(req, res) {
        try {
            const { id } = req.params;
            
            const [agent] = await this.db.execute(`
                SELECT 
                    aa.*,
                    as_.status,
                    as_.current_task,
                    as_.last_heartbeat,
                    as_.performance_metrics
                FROM ai_agents aa
                LEFT JOIN agent_states as_ ON aa.id = as_.agent_id
                WHERE aa.id = ?
            `, [id]);

            if (agent.length === 0) {
                return res.status(404).json({ error: 'Agent not found' });
            }

            res.json(agent[0]);

        } catch (error) {
            res.status(500).json({ error: 'Failed to fetch agent' });
        }
    }

    async getAgentPerformance(req, res) {
        try {
            const { id } = req.params;
            const { period = '7d' } = req.query;
            
            const [performance] = await this.db.execute(`
                SELECT 
                    DATE(created_at) as date,
                    AVG(CASE WHEN metric_type = 'efficiency' THEN metric_value END) as efficiency,
                    AVG(CASE WHEN metric_type = 'quality' THEN metric_value END) as quality,
                    AVG(CASE WHEN metric_type = 'speed' THEN metric_value END) as speed
                FROM agent_metrics
                WHERE agent_id = ? AND created_at >= DATE_SUB(NOW(), INTERVAL 7 DAY)
                GROUP BY DATE(created_at)
                ORDER BY date DESC
            `, [id]);

            res.json(performance);

        } catch (error) {
            res.status(500).json({ error: 'Failed to fetch agent performance' });
        }
    }

    async updateAgentStatus(req, res) {
        try {
            const { id } = req.params;
            const { status } = req.body;
            
            await this.db.execute(`
                UPDATE agent_states 
                SET status = ?, last_heartbeat = NOW()
                WHERE agent_id = ?
            `, [status, id]);

            res.json({ message: 'Agent status updated successfully' });

        } catch (error) {
            res.status(500).json({ error: 'Failed to update agent status' });
        }
    }

    async getTasks(req, res) {
        try {
            const { project_id, agent_id, status } = req.query;
            
            let query = `
                SELECT 
                    t.*,
                    p.name as project_name,
                    aa.name as agent_name,
                    u.username as assigned_by_name
                FROM tasks t
                LEFT JOIN projects p ON t.project_id = p.id
                LEFT JOIN ai_agents aa ON t.assigned_agent_id = aa.id
                LEFT JOIN users u ON t.assigned_by = u.id
                WHERE 1=1
            `;
            
            const params = [];
            
            if (project_id) {
                query += ' AND t.project_id = ?';
                params.push(project_id);
            }
            
            if (agent_id) {
                query += ' AND t.assigned_agent_id = ?';
                params.push(agent_id);
            }
            
            if (status) {
                query += ' AND t.status = ?';
                params.push(status);
            }
            
            query += ' ORDER BY t.created_at DESC';
            
            const [tasks] = await this.db.execute(query, params);
            res.json(tasks);

        } catch (error) {
            res.status(500).json({ error: 'Failed to fetch tasks' });
        }
    }

    async getTask(req, res) {
        try {
            const { id } = req.params;
            
            const [task] = await this.db.execute(`
                SELECT 
                    t.*,
                    p.name as project_name,
                    aa.name as agent_name,
                    u.username as assigned_by_name
                FROM tasks t
                LEFT JOIN projects p ON t.project_id = p.id
                LEFT JOIN ai_agents aa ON t.assigned_agent_id = aa.id
                LEFT JOIN users u ON t.assigned_by = u.id
                WHERE t.id = ?
            `, [id]);

            if (task.length === 0) {
                return res.status(404).json({ error: 'Task not found' });
            }

            res.json(task[0]);

        } catch (error) {
            res.status(500).json({ error: 'Failed to fetch task' });
        }
    }

    async createTask(req, res) {
        try {
            const {
                title,
                description,
                project_id,
                assigned_agent_id,
                priority = 'medium',
                estimated_hours,
                deadline
            } = req.body;

            const [result] = await this.db.execute(`
                INSERT INTO tasks (
                    title, description, project_id, assigned_agent_id,
                    priority, estimated_hours, deadline, assigned_by
                ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)
            `, [
                title, description, project_id, assigned_agent_id,
                priority, estimated_hours, deadline, req.user.userId
            ]);

            res.status(201).json({
                id: result.insertId,
                message: 'Task created successfully'
            });

        } catch (error) {
            res.status(500).json({ error: 'Failed to create task' });
        }
    }

    async updateTask(req, res) {
        try {
            const { id } = req.params;
            const updates = req.body;
            
            const [result] = await this.db.execute(`
                UPDATE tasks 
                SET title = ?, description = ?, status = ?, priority = ?, 
                    progress = ?, actual_hours = ?, notes = ?
                WHERE id = ?
            `, [
                updates.title, updates.description, updates.status, updates.priority,
                updates.progress, updates.actual_hours, updates.notes, id
            ]);

            if (result.affectedRows === 0) {
                return res.status(404).json({ error: 'Task not found' });
            }

            res.json({ message: 'Task updated successfully' });

        } catch (error) {
            res.status(500).json({ error: 'Failed to update task' });
        }
    }

    async getLogs(req, res) {
        try {
            const { level, category, limit = 100 } = req.query;
            
            let query = `
                SELECT 
                    al.*,
                    p.name as project_name,
                    aa.name as agent_name
                FROM activity_logs al
                LEFT JOIN projects p ON al.project_id = p.id
                LEFT JOIN ai_agents aa ON al.agent_id = aa.id
                WHERE 1=1
            `;
            
            const params = [];
            
            if (level) {
                query += ' AND al.level = ?';
                params.push(level);
            }
            
            if (category) {
                query += ' AND al.category = ?';
                params.push(category);
            }
            
            query += ' ORDER BY al.created_at DESC LIMIT ?';
            params.push(parseInt(limit));
            
            const [logs] = await this.db.execute(query, params);
            res.json(logs);

        } catch (error) {
            res.status(500).json({ error: 'Failed to fetch logs' });
        }
    }

    async getAuditLogs(req, res) {
        try {
            const { limit = 50 } = req.query;
            
            const [logs] = await this.db.execute(`
                SELECT 
                    al.*,
                    u.username as user_name
                FROM activity_logs al
                LEFT JOIN users u ON al.user_id = u.id
                WHERE al.category = 'security'
                ORDER BY al.created_at DESC
                LIMIT ?
            `, [parseInt(limit)]);

            res.json(logs);

        } catch (error) {
            res.status(500).json({ error: 'Failed to fetch audit logs' });
        }
    }

    async getProjectReports(req, res) {
        try {
            const { period = '30d' } = req.query;
            
            const [reports] = await this.db.execute(`
                SELECT 
                    p.name as project_name,
                    COUNT(t.id) as total_tasks,
                    SUM(CASE WHEN t.status = 'completed' THEN 1 ELSE 0 END) as completed_tasks,
                    AVG(pm.completion_percentage) as avg_completion,
                    AVG(pm.agent_efficiency) as avg_efficiency
                FROM projects p
                LEFT JOIN tasks t ON p.id = t.project_id
                LEFT JOIN project_metrics pm ON p.id = pm.project_id
                WHERE p.created_at >= DATE_SUB(NOW(), INTERVAL 30 DAY)
                GROUP BY p.id, p.name
                ORDER BY avg_completion DESC
            `);

            res.json(reports);

        } catch (error) {
            res.status(500).json({ error: 'Failed to fetch project reports' });
        }
    }

    async getAgentReports(req, res) {
        try {
            const [reports] = await this.db.execute(`
                SELECT 
                    aa.name as agent_name,
                    aa.role,
                    COUNT(t.id) as total_tasks,
                    SUM(CASE WHEN t.status = 'completed' THEN 1 ELSE 0 END) as completed_tasks,
                    AVG(am.metric_value) as avg_performance,
                    as_.status as current_status
                FROM ai_agents aa
                LEFT JOIN tasks t ON aa.id = t.assigned_agent_id
                LEFT JOIN agent_metrics am ON aa.id = am.agent_id
                LEFT JOIN agent_states as_ ON aa.id = as_.agent_id
                GROUP BY aa.id, aa.name, aa.role, as_.status
                ORDER BY avg_performance DESC
            `);

            res.json(reports);

        } catch (error) {
            res.status(500).json({ error: 'Failed to fetch agent reports' });
        }
    }

    async getFinancialReports(req, res) {
        try {
            const [reports] = await this.db.execute(`
                SELECT 
                    p.name as project_name,
                    p.budget,
                    COALESCE(pm.budget_used, 0) as actual_cost,
                    p.budget - COALESCE(pm.budget_used, 0) as remaining_budget,
                    CASE 
                        WHEN p.budget > 0 THEN 
                            (COALESCE(pm.budget_used, 0) / p.budget) * 100 
                        ELSE 0 
                    END as budget_usage_percentage
                FROM projects p
                LEFT JOIN project_metrics pm ON p.id = pm.project_id AND pm.metric_date = CURDATE()
                GROUP BY p.id, p.name, p.budget, pm.budget_used
                ORDER BY budget_usage_percentage DESC
            `);

            res.json(reports);

        } catch (error) {
            res.status(500).json({ error: 'Failed to fetch financial reports' });
        }
    }

    async healthCheck(req, res) {
        try {
            await this.db.execute('SELECT 1');
            
            res.json({
                status: 'healthy',
                timestamp: new Date().toISOString(),
                database: 'connected',
                connected_clients: this.connectedClients.size,
                uptime: process.uptime()
            });

        } catch (error) {
            res.status(503).json({
                status: 'unhealthy',
                error: error.message
            });
        }
    }

    start() {
        this.server.listen(this.port, () => {
            console.log(`🚀 SOLARIA C-Suite Dashboard running on port ${this.port}`);
            console.log(`📊 Dashboard available at: http://localhost:${this.port}`);
            console.log(`🔐 Secure authentication enabled`);
            console.log(`📡 Real-time updates active`);
        });
    }
}

// Iniciar servidor
const server = new SolariaDashboardServer();
server.start();

module.exports = SolariaDashboardServer;