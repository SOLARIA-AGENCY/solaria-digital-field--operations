/**
 * Human-Readable Formatters
 *
 * @author ECO-Lambda | DFO Enhancement Plan
 * @date 2025-12-27
 * @task DFN-002
 *
 * Utilities for formatting structured data into human-readable strings
 */
// ============================================================================
// Icon Mappings
// ============================================================================
const StatusIcons = {
    task: {
        pending: '⏳',
        in_progress: '🔄',
        completed: '✅',
        blocked: '🚫',
    },
    priority: {
        low: '🔵',
        medium: '🟡',
        high: '🟠',
        critical: '🔴',
    },
    sprint: {
        planned: '📋',
        active: '🚀',
        completed: '✅',
        cancelled: '❌',
    },
    agent: {
        active: '🟢',
        busy: '🟡',
        inactive: '⚫',
    },
};
// ============================================================================
// Task Formatters
// ============================================================================
export function formatTask(task) {
    const statusIcon = StatusIcons.task[task.status] || '❓';
    const priorityIcon = task.priority ? StatusIcons.priority[task.priority] : '';
    const lines = [
        `${statusIcon} ${task.task_code}: ${task.title}`,
        `   Status: ${task.status} | Progress: ${task.progress}%`,
    ];
    if (task.agent_name) {
        lines.push(`   Assigned: ${task.agent_name}`);
    }
    if (task.priority) {
        lines.push(`   Priority: ${priorityIcon} ${task.priority}`);
    }
    if (task.estimated_hours) {
        lines.push(`   Estimated: ${task.estimated_hours}h`);
    }
    if (task.deadline) {
        lines.push(`   Deadline: ${formatDate(task.deadline)}`);
    }
    return lines.join('\n');
}
export function formatTaskList(tasks) {
    if (tasks.length === 0) {
        return 'No tasks found.';
    }
    const lines = [
        `Found ${tasks.length} task${tasks.length === 1 ? '' : 's'}:`,
        '',
    ];
    tasks.forEach((task, index) => {
        const statusIcon = StatusIcons.task[task.status] || '❓';
        lines.push(`${index + 1}. ${statusIcon} ${task.task_code}: ${task.title}`, `   Status: ${task.status} | Progress: ${task.progress}% | Assigned: ${task.agent_name || 'Unassigned'}`, '');
    });
    return lines.join('\n');
}
export function formatTaskSummary(data) {
    const completionRate = data.total > 0
        ? Math.round((data.completed / data.total) * 100)
        : 0;
    return `
Task Summary:
─────────────────────
Total: ${data.total}
⏳ Pending: ${data.pending}
🔄 In Progress: ${data.in_progress}
✅ Completed: ${data.completed}
🚫 Blocked: ${data.blocked}
Completion Rate: ${completionRate}%
  `.trim();
}
// ============================================================================
// Project Formatters
// ============================================================================
export function formatProject(project) {
    const lines = [
        `📁 ${project.project_code}: ${project.name}`,
        `   Status: ${project.status}`,
    ];
    if (project.progress !== undefined) {
        lines.push(`   Progress: ${project.progress}%`);
    }
    if (project.budget) {
        lines.push(`   Budget: $${project.budget.toLocaleString()}`);
    }
    if (project.deadline) {
        lines.push(`   Deadline: ${formatDate(project.deadline)}`);
    }
    return lines.join('\n');
}
export function formatProjectList(projects) {
    if (projects.length === 0) {
        return 'No projects found.';
    }
    const lines = [
        `Found ${projects.length} project${projects.length === 1 ? '' : 's'}:`,
        '',
    ];
    projects.forEach((project, index) => {
        lines.push(`${index + 1}. 📁 ${project.project_code}: ${project.name}`, `   Status: ${project.status} | Progress: ${project.progress || 0}%`, '');
    });
    return lines.join('\n');
}
// ============================================================================
// Agent Formatters
// ============================================================================
export function formatAgent(agent) {
    const statusIcon = StatusIcons.agent[agent.status] || '❓';
    return `
${statusIcon} Agent #${agent.id}: ${agent.name}
   Role: ${agent.role}
   Status: ${agent.status}
  `.trim();
}
export function formatAgentList(agents) {
    if (agents.length === 0) {
        return 'No agents found.';
    }
    const lines = [
        `Found ${agents.length} agent${agents.length === 1 ? '' : 's'}:`,
        '',
    ];
    agents.forEach((agent, index) => {
        const statusIcon = StatusIcons.agent[agent.status] || '❓';
        lines.push(`${index + 1}. ${statusIcon} ${agent.name} (#${agent.id})`, `   Role: ${agent.role} | Status: ${agent.status}`, '');
    });
    return lines.join('\n');
}
// ============================================================================
// Sprint Formatters
// ============================================================================
export function formatSprint(sprint) {
    const statusIcon = StatusIcons.sprint[sprint.status] || '❓';
    const lines = [
        `${statusIcon} Sprint ${sprint.sprint_number}: ${sprint.name}`,
        `   Status: ${sprint.status}`,
    ];
    if (sprint.start_date && sprint.end_date) {
        lines.push(`   Duration: ${formatDate(sprint.start_date)} → ${formatDate(sprint.end_date)}`);
    }
    if (sprint.progress !== undefined) {
        lines.push(`   Progress: ${sprint.progress}%`);
    }
    return lines.join('\n');
}
export function formatSprintList(sprints) {
    if (sprints.length === 0) {
        return 'No sprints found.';
    }
    const lines = [
        `Found ${sprints.length} sprint${sprints.length === 1 ? '' : 's'}:`,
        '',
    ];
    sprints.forEach((sprint, index) => {
        const statusIcon = StatusIcons.sprint[sprint.status] || '❓';
        lines.push(`${index + 1}. ${statusIcon} Sprint ${sprint.sprint_number}: ${sprint.name}`, `   Status: ${sprint.status} | Progress: ${sprint.progress || 0}%`, '');
    });
    return lines.join('\n');
}
export function formatCapabilities(agent_id, capabilities) {
    if (capabilities.length === 0) {
        return `Agent ${agent_id} has no registered capabilities.`;
    }
    const activeCount = capabilities.filter(c => c.active).length;
    const lines = [
        `Agent ${agent_id} Capabilities:`,
        `Total: ${capabilities.length} | Active: ${activeCount}`,
        '',
    ];
    capabilities.forEach(cap => {
        const icon = cap.active ? '✓' : '✗';
        lines.push(`  ${icon} ${cap.skill_name} v${cap.version}`);
    });
    return lines.join('\n');
}
// ============================================================================
// Table Formatters
// ============================================================================
export function formatTable(data, columns) {
    if (data.length === 0) {
        return 'No data available.';
    }
    // Calculate column widths
    const widths = {};
    columns.forEach(col => {
        widths[col] = Math.max(col.length, ...data.map(row => String(row[col] || '').length));
    });
    // Header
    const header = columns.map(col => col.padEnd(widths[col])).join(' | ');
    const separator = columns.map(col => '─'.repeat(widths[col])).join('─┼─');
    // Rows
    const rows = data.map(row => columns.map(col => String(row[col] || '').padEnd(widths[col])).join(' | '));
    return [header, separator, ...rows].join('\n');
}
// ============================================================================
// Utility Functions
// ============================================================================
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    });
}
export function formatDuration(minutes) {
    if (minutes < 60) {
        return `${minutes}m`;
    }
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return mins > 0 ? `${hours}h ${mins}m` : `${hours}h`;
}
export function formatPercentage(value, total) {
    if (total === 0)
        return '0%';
    const percent = Math.round((value / total) * 100);
    return `${percent}%`;
}
export function formatProgressBar(progress, width = 20) {
    const filled = Math.round((progress / 100) * width);
    const empty = width - filled;
    return `[${'█'.repeat(filled)}${'░'.repeat(empty)}] ${progress}%`;
}
const HealthIcons = {
    healthy: '✅',
    degraded: '⚠️',
    unhealthy: '❌',
};
function formatUptime(seconds) {
    const days = Math.floor(seconds / 86400);
    const hours = Math.floor((seconds % 86400) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const parts = [];
    if (days > 0)
        parts.push(`${days}d`);
    if (hours > 0)
        parts.push(`${hours}h`);
    if (minutes > 0 || parts.length === 0)
        parts.push(`${minutes}m`);
    return parts.join(' ');
}
export function formatHealth(data) {
    const lines = [
        'System Health Report',
        '====================',
        `Status: ${data.status.toUpperCase()} ${HealthIcons[data.status]}`,
        `Uptime: ${formatUptime(data.uptime_seconds)}`,
        `Version: ${data.version}`,
        '',
        'Checks:',
    ];
    const checkOrder = ['database', 'redis', 'disk', 'memory', 'cpu'];
    for (const checkName of checkOrder) {
        const check = data.checks[checkName];
        const icon = HealthIcons[check.status];
        const name = checkName.charAt(0).toUpperCase() + checkName.slice(1).padEnd(7);
        let detail = '';
        if (check.latency_ms !== undefined) {
            detail = `(${check.latency_ms}ms)`;
        }
        else if (check.details?.use_percent !== undefined) {
            const total = check.details.total || check.details.total_size || '';
            detail = `(${check.details.use_percent}% of ${total})`;
        }
        else if (check.details?.load_1m !== undefined) {
            detail = `(load: ${check.details.load_1m}/${check.details.cpu_count})`;
        }
        else if (check.details?.configured === false) {
            detail = '(not configured)';
        }
        lines.push(`  ${name} ${icon} ${check.status} ${detail}`);
    }
    lines.push('');
    lines.push(`Summary: ${data.summary.passed} passed, ${data.summary.warnings} warning, ${data.summary.failed} failed`);
    return lines.join('\n');
}
const TrendIcons = {
    up: '↑',
    down: '↓',
    stable: '→',
};
export function formatStats(data) {
    const lines = [
        'Project Statistics Dashboard',
        '============================',
    ];
    if (data.project_name) {
        lines.push(`Project: ${data.project_name} (#${data.project_id})`);
        lines.push('');
    }
    // Task Distribution
    lines.push('Task Distribution:');
    const taskTotal = data.tasks.total || 1;
    const statusBars = [
        `  ⏳ Pending:     ${formatProgressBar(Math.round((data.tasks.by_status.pending / taskTotal) * 100), 15)} (${data.tasks.by_status.pending})`,
        `  🔄 In Progress: ${formatProgressBar(Math.round((data.tasks.by_status.in_progress / taskTotal) * 100), 15)} (${data.tasks.by_status.in_progress})`,
        `  ✅ Completed:   ${formatProgressBar(Math.round((data.tasks.by_status.completed / taskTotal) * 100), 15)} (${data.tasks.by_status.completed})`,
        `  🚫 Blocked:     ${formatProgressBar(Math.round((data.tasks.by_status.blocked / taskTotal) * 100), 15)} (${data.tasks.by_status.blocked})`,
    ];
    lines.push(...statusBars);
    lines.push('');
    // Priority Distribution
    lines.push('Priority Distribution:');
    const priorityBars = [
        `  🔴 Critical: ${data.tasks.by_priority.critical}`,
        `  🟠 High:     ${data.tasks.by_priority.high}`,
        `  🟡 Medium:   ${data.tasks.by_priority.medium}`,
        `  🔵 Low:      ${data.tasks.by_priority.low}`,
    ];
    lines.push(...priorityBars);
    lines.push('');
    // Velocity
    const trendIcon = TrendIcons[data.velocity.trend] || '→';
    lines.push('Velocity:');
    lines.push(`  Current Sprint: ${data.velocity.current_sprint} pts`);
    lines.push(`  Average:        ${data.velocity.average} pts ${trendIcon}`);
    lines.push('');
    // Metrics
    lines.push('Key Metrics:');
    lines.push(`  Completion Rate: ${formatProgressBar(data.completion_rate, 15)}`);
    lines.push(`  Health Score:    ${formatProgressBar(data.health_score, 15)}`);
    lines.push(`  Active Agents:   ${data.agents_active}/${data.agents_total}`);
    return lines.join('\n');
}
export function formatDocument(doc) {
    const lines = [
        `📄 ${doc.name}`,
        `   Type: ${doc.type} | Version: ${doc.version}`,
        `   Created: ${formatDate(doc.created_at)}`,
        `   Updated: ${formatDate(doc.updated_at)}`,
    ];
    if (doc.project_name) {
        lines.push(`   Project: ${doc.project_name}`);
    }
    if (doc.content_md) {
        lines.push('');
        lines.push('Content Preview:');
        lines.push('─'.repeat(40));
        // Show first 500 chars of content
        const preview = doc.content_md.length > 500
            ? doc.content_md.substring(0, 500) + '...'
            : doc.content_md;
        lines.push(preview);
    }
    return lines.join('\n');
}
export function formatDocumentList(docs) {
    if (docs.length === 0) {
        return 'No documents found.';
    }
    const lines = [
        `Found ${docs.length} document${docs.length === 1 ? '' : 's'}:`,
        '',
    ];
    docs.forEach((doc, index) => {
        lines.push(`${index + 1}. 📄 ${doc.name}`, `   Type: ${doc.type} | Version: ${doc.version} | Updated: ${formatDate(doc.updated_at)}`, '');
    });
    return lines.join('\n');
}
export const Formatters = {
    task: formatTask,
    taskList: formatTaskList,
    taskSummary: formatTaskSummary,
    project: formatProject,
    projectList: formatProjectList,
    agent: formatAgent,
    agentList: formatAgentList,
    sprint: formatSprint,
    sprintList: formatSprintList,
    capabilities: formatCapabilities,
    table: formatTable,
    progressBar: formatProgressBar,
    health: formatHealth,
    stats: formatStats,
    document: formatDocument,
    documentList: formatDocumentList,
};
//# sourceMappingURL=formatters.js.map