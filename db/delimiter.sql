USE chores_db;

DELIMITER //
CREATE PROCEDURE sp_get_calendar_data()

BEGIN
SELECT tasks.task_id, 
	tasks.taskname, 
	user_chores.user_id, 
    user.username, 
    sched_day 
FROM (
(tasks INNER JOIN user_chores 
ON tasks.task_id = user_chores.task_id) 
INNER JOIN user 
ON user.user_id = user_chores.user_id);

END //


call sp_get_calendar_data();