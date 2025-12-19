-- Migration: Add task_items table
-- Version: 1.0.0
-- Date: 2025-12-19
--
-- Run locally:
--   docker exec solaria-dfo-office mariadb -uroot -pSolariaRoot2024 solaria_construction < scripts/migrate-task-items.sql
--
-- Run on production:
--   ssh solaria-hetzner-prod "docker exec solaria-dfo-office mariadb -uroot -pSolariaRoot2024 solaria_construction" < scripts/migrate-task-items.sql

USE solaria_construction;

-- ============================================================================
-- TASK ITEMS - Subtasks/Checklist items per task
-- ============================================================================

CREATE TABLE IF NOT EXISTS task_items (
    id INT AUTO_INCREMENT PRIMARY KEY,
    task_id INT NOT NULL,
    title VARCHAR(500) NOT NULL,
    description TEXT,
    sort_order INT DEFAULT 0,
    is_completed BOOLEAN DEFAULT FALSE,
    completed_at TIMESTAMP NULL,
    completed_by_agent_id INT,
    estimated_minutes INT DEFAULT 0,
    actual_minutes INT DEFAULT 0,
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_task_items_task (task_id),
    INDEX idx_task_items_completed (is_completed),
    INDEX idx_task_items_sort (task_id, sort_order),
    FOREIGN KEY (task_id) REFERENCES tasks(id) ON DELETE CASCADE,
    FOREIGN KEY (completed_by_agent_id) REFERENCES ai_agents(id) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Verify creation
SELECT 'task_items table created successfully' AS status;
DESCRIBE task_items;

-- Show sample query for verification
SELECT
    'Ready for use. Sample queries:' AS info,
    '- SELECT * FROM task_items WHERE task_id = 1;' AS query1,
    '- INSERT INTO task_items (task_id, title) VALUES (1, "Subtask 1");' AS query2;
