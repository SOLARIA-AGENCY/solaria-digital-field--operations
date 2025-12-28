-- ============================================================================
-- Migration 008: Sprint → Epic Hierarchy
-- Date: 2025-12-25
-- Purpose: Establish Sprint as project phase containing Epics (features)
-- ============================================================================
--
-- NEW HIERARCHY:
--   PROJECT
--     └── SPRINT (Project Phase: Planning, Development, Testing, Deployment)
--           └── EPIC (Feature/Module within the phase)
--                 └── TASK (Atomic work item)
--     └── STANDALONE TASKS (Parallel work, hotfixes - no epic required)
--
-- ============================================================================

-- Step 1: Add sprint_id to epics table (Epic belongs to a Sprint/Phase)
ALTER TABLE epics
    ADD COLUMN sprint_id INT DEFAULT NULL AFTER project_id,
    ADD INDEX idx_epic_sprint (sprint_id),
    ADD CONSTRAINT fk_epic_sprint FOREIGN KEY (sprint_id)
        REFERENCES sprints(id) ON DELETE SET NULL;

-- Step 2: Add phase metadata to sprints
ALTER TABLE sprints
    ADD COLUMN phase_order INT DEFAULT 0 AFTER sprint_number,
    ADD COLUMN phase_type ENUM('planning', 'development', 'testing', 'deployment', 'maintenance', 'custom')
        DEFAULT 'custom' AFTER phase_order,
    ADD INDEX idx_sprint_phase (project_id, phase_order);

-- Step 3: Update existing sprints with phase info
UPDATE sprints SET phase_type = 'planning', phase_order = 1 WHERE name LIKE '%Foundation%' OR name LIKE '%Plan%';
UPDATE sprints SET phase_type = 'development', phase_order = 2 WHERE name LIKE '%Dashboard%' OR name LIKE '%Development%' OR name LIKE '%Dev%';
UPDATE sprints SET phase_type = 'testing', phase_order = 3 WHERE name LIKE '%Test%' OR name LIKE '%QA%' OR name LIKE '%Debug%';
UPDATE sprints SET phase_type = 'deployment', phase_order = 4 WHERE name LIKE '%Deploy%' OR name LIKE '%Launch%' OR name LIKE '%Polish%';

-- Step 4: Assign existing epics to sprints based on status/logic
-- Completed epics go to first completed sprint
UPDATE epics e
    JOIN sprints s ON e.project_id = s.project_id AND s.status = 'completed'
    SET e.sprint_id = s.id
    WHERE e.status = 'completed' AND e.sprint_id IS NULL;

-- In-progress epics go to active sprint
UPDATE epics e
    JOIN sprints s ON e.project_id = s.project_id AND s.status = 'active'
    SET e.sprint_id = s.id
    WHERE e.status = 'in_progress' AND e.sprint_id IS NULL;

-- Open epics go to first planned sprint
UPDATE epics e
    JOIN sprints s ON e.project_id = s.project_id AND s.status = 'planned'
    SET e.sprint_id = s.id
    WHERE e.status = 'open' AND e.sprint_id IS NULL;

-- Step 5: Create view for task hierarchy (includes sprint via epic)
CREATE OR REPLACE VIEW v_task_hierarchy AS
SELECT
    t.id AS task_id,
    t.task_number,
    t.title AS task_title,
    t.status AS task_status,
    t.priority,
    t.project_id,
    p.code AS project_code,
    p.name AS project_name,
    -- Epic info
    t.epic_id,
    e.name AS epic_name,
    e.epic_number,
    e.status AS epic_status,
    -- Sprint info (from epic if available, otherwise from task directly)
    COALESCE(e.sprint_id, t.sprint_id) AS sprint_id,
    COALESCE(se.name, st.name) AS sprint_name,
    COALESCE(se.sprint_number, st.sprint_number) AS sprint_number,
    COALESCE(se.phase_type, st.phase_type) AS phase_type,
    COALESCE(se.status, st.status) AS sprint_status,
    -- Flags
    CASE WHEN t.epic_id IS NULL AND t.sprint_id IS NOT NULL THEN 1 ELSE 0 END AS is_standalone,
    CASE WHEN t.epic_id IS NULL AND t.sprint_id IS NULL THEN 1 ELSE 0 END AS is_orphan
FROM tasks t
LEFT JOIN projects p ON t.project_id = p.id
LEFT JOIN epics e ON t.epic_id = e.id
LEFT JOIN sprints se ON e.sprint_id = se.id  -- Sprint from epic
LEFT JOIN sprints st ON t.sprint_id = st.id; -- Sprint direct (standalone)

-- Step 6: Create default phase sprints for projects without sprints
-- (Run as stored procedure to add to new projects)
DELIMITER //
CREATE PROCEDURE IF NOT EXISTS create_default_sprints(IN p_project_id INT)
BEGIN
    DECLARE sprint_exists INT DEFAULT 0;

    SELECT COUNT(*) INTO sprint_exists FROM sprints WHERE project_id = p_project_id;

    IF sprint_exists = 0 THEN
        INSERT INTO sprints (project_id, sprint_number, name, phase_type, phase_order, status) VALUES
            (p_project_id, 1, 'Phase 1 - Planning', 'planning', 1, 'planned'),
            (p_project_id, 2, 'Phase 2 - Development', 'development', 2, 'planned'),
            (p_project_id, 3, 'Phase 3 - Testing', 'testing', 3, 'planned'),
            (p_project_id, 4, 'Phase 4 - Deployment', 'deployment', 4, 'planned');
    END IF;
END //
DELIMITER ;

-- ============================================================================
-- Verification queries
-- ============================================================================
-- SELECT * FROM v_task_hierarchy WHERE project_id = 1 ORDER BY sprint_number, epic_number, task_number;
-- SELECT s.name, s.phase_type, COUNT(e.id) as epic_count FROM sprints s LEFT JOIN epics e ON e.sprint_id = s.id GROUP BY s.id;
