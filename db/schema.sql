DROP DATABASE IF EXISTS chores_db;
CREATE DATABASE chores_db;
USE chores_db;

CREATE TABLE tasks
(
	task_id int NOT NULL AUTO_INCREMENT,
	taskname varchar(255) NOT NULL,
    taskhrs Float(3,2),
	PRIMARY KEY (task_id)
);


CREATE TABLE user
(
    user_id int NOT NULL auto_increment,
    username varchar(255) NOT NULL,
    login varchar(20) NOT NULL,
    pswd varchar (255) NOT NULL,
    rewardpts int,
    adminflag boolean,
    PRIMARY KEY (user_id)
);



CREATE TABLE user_chores
(
    id int NOT NULL auto_increment,	
    user_id int NOT NULL,
    rewardpts int,
    task_id int,
    ranking int,
    tu_sched_id int,	
    sched_day varchar(255) NOT NULL,
    completedflag boolean,
    PRIMARY KEY (id)
);




CREATE TABLE task_user_sched
(
    tu_sched_id int NOT NULL AUTO_INCREMENT,
    sched_day varchar(255) NOT NULL,
    PRIMARY KEY (tu_sched_id)
);


CREATE TABLE chore_approval
(
	id int NOT NULL auto_increment,
    task_id int,
    user_id int,
    approval_cnt int,
    PRIMARY KEY (id)
);    
