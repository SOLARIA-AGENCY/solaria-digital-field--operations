-- SOLARIA DFO v3.1.0 Migration Script
-- Fixes: Task numbering per project, Auto-assign Claude Code agent, Add project codes

-- 1. Add 'code' column to projects if it doesn't exist
ALTER TABLE projects ADD COLUMN IF NOT EXISTS code VARCHAR(10) NOT NULL DEFAULT 'PRJ';

-- 2. Add 'task_number' column to tasks if it doesn't exist
ALTER TABLE tasks ADD COLUMN IF NOT EXISTS task_number INT DEFAULT 0;

-- 3. Update project codes
UPDATE projects SET code = 'DFO' WHERE name LIKE '%SOLARIA%Digital%' OR name LIKE '%DFO%';
UPDATE projects SET code = 'AKD' WHERE name LIKE '%Akademate%' OR name LIKE '%AKD%';
UPDATE projects SET code = 'VDR' WHERE name LIKE '%Virgen%Rocio%' OR name LIKE '%INMOBIL%' OR name LIKE '%VDR%';
UPDATE projects SET code = 'ADP' WHERE name LIKE '%ADEPAC%' OR name LIKE '%ADP%';
UPDATE projects SET code = 'PLB' WHERE name LIKE '%PRILABSA%' OR name LIKE '%PLB%';

-- 4. Create Claude Code agent if not exists
INSERT IGNORE INTO ai_agents (name, role, status, capabilities, last_active)
SELECT 'Claude Code', 'developer', 'active', '{"ai_assistant": true, "code_generation": true, "refactoring": true, "debugging": true}', NOW()
WHERE NOT EXISTS (SELECT 1 FROM ai_agents WHERE name = 'Claude Code');

-- 5. Get Claude Code agent ID
SET @claude_code_id = (SELECT id FROM ai_agents WHERE name = 'Claude Code' LIMIT 1);

-- 6. Assign Claude Code to all tasks without assigned agent
UPDATE tasks
SET agent_id = @claude_code_id
WHERE agent_id IS NULL;

-- 7. Generate sequential task_numbers per project
-- Using a stored procedure for this complex operation
DROP PROCEDURE IF EXISTS generate_task_numbers;

DELIMITER //
CREATE PROCEDURE generate_task_numbers()
BEGIN
    DECLARE done INT DEFAULT FALSE;
    DECLARE proj_id INT;
    DECLARE task_seq INT;
    DECLARE t_id INT;

    -- Cursor for projects
    DECLARE project_cursor CURSOR FOR SELECT id FROM projects;
    DECLARE CONTINUE HANDLER FOR NOT FOUND SET done = TRUE;

    OPEN project_cursor;

    project_loop: LOOP
        FETCH project_cursor INTO proj_id;
        IF done THEN
            LEAVE project_loop;
        END IF;

        -- Reset sequence for each project
        SET task_seq = 0;

        -- Update task numbers ordered by creation date
        UPDATE tasks
        SET task_number = (@row_num := @row_num + 1)
        WHERE project_id = proj_id
        ORDER BY created_at ASC;

        -- Use a different approach - update in batches
        SET @row_num = 0;
        UPDATE tasks t
        JOIN (
            SELECT id, (@rn := @rn + 1) as new_number
            FROM tasks, (SELECT @rn := 0) r
            WHERE project_id = proj_id
            ORDER BY created_at ASC
        ) ranked ON t.id = ranked.id
        SET t.task_number = ranked.new_number;

    END LOOP;

    CLOSE project_cursor;
END //
DELIMITER ;

-- Alternative simpler approach using variables
SET @row_num = 0;
SET @current_project = NULL;

UPDATE tasks t
JOIN (
    SELECT
        id,
        @row_num := IF(@current_project = project_id, @row_num + 1, 1) as new_number,
        @current_project := project_id as proj
    FROM (SELECT id, project_id FROM tasks ORDER BY project_id, created_at ASC) ordered,
         (SELECT @row_num := 0, @current_project := NULL) vars
) ranked ON t.id = ranked.id
SET t.task_number = ranked.new_number;

-- 8. Add indexes if they don't exist
ALTER TABLE projects ADD INDEX IF NOT EXISTS idx_code (code);
ALTER TABLE tasks ADD INDEX IF NOT EXISTS idx_task_number (project_id, task_number);

-- 9. Verify migration
SELECT 'Projects with codes:' as info;
SELECT id, name, code FROM projects;

SELECT 'Tasks with numbers (first 20):' as info;
SELECT t.id, t.title, t.task_number, p.code,
       CONCAT(COALESCE(p.code, 'TSK'), '-', LPAD(COALESCE(t.task_number, t.id), 3, '0')) as task_code,
       a.name as agent_name
FROM tasks t
LEFT JOIN projects p ON t.project_id = p.id
LEFT JOIN ai_agents a ON t.agent_id = a.id
LIMIT 20;

SELECT 'Claude Code agent tasks:' as info;
SELECT COUNT(*) as tasks_with_claude_code
FROM tasks t
JOIN ai_agents a ON t.agent_id = a.id
WHERE a.name = 'Claude Code';
