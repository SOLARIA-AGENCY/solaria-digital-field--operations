-- ============================================================================
-- DFO-036: Task Tags Migration
-- Sistema de etiquetas para tareas
-- ============================================================================

-- Task tags definition table
CREATE TABLE IF NOT EXISTS task_tags (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL UNIQUE,
    description VARCHAR(200),
    color VARCHAR(7) DEFAULT '#6b7280',  -- hex color
    icon VARCHAR(50) DEFAULT 'tag',       -- icon name
    usage_count INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_name (name),
    INDEX idx_usage (usage_count DESC)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Task-Tag relationship (many-to-many)
CREATE TABLE IF NOT EXISTS task_tag_assignments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    task_id INT NOT NULL,
    tag_id INT NOT NULL,
    assigned_by INT,
    assigned_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE KEY unique_task_tag (task_id, tag_id),
    INDEX idx_task (task_id),
    INDEX idx_tag (tag_id),
    FOREIGN KEY (task_id) REFERENCES tasks(id) ON DELETE CASCADE,
    FOREIGN KEY (tag_id) REFERENCES task_tags(id) ON DELETE CASCADE,
    FOREIGN KEY (assigned_by) REFERENCES users(id) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Insert predefined tags with distinctive colors
INSERT INTO task_tags (name, description, color, icon) VALUES
('bug', 'Bug fix or error correction', '#ef4444', 'bug'),
('feature', 'New feature implementation', '#22c55e', 'sparkles'),
('improvement', 'Enhancement to existing functionality', '#3b82f6', 'arrow-up'),
('refactor', 'Code refactoring without behavior change', '#a855f7', 'code'),
('docs', 'Documentation updates', '#f59e0b', 'book-open'),
('test', 'Testing related work', '#06b6d4', 'check-circle'),
('security', 'Security related task', '#dc2626', 'shield'),
('performance', 'Performance optimization', '#84cc16', 'zap'),
('ui', 'User interface changes', '#ec4899', 'layout'),
('api', 'API development or changes', '#8b5cf6', 'server')
ON DUPLICATE KEY UPDATE description=VALUES(description), color=VALUES(color), icon=VALUES(icon);
