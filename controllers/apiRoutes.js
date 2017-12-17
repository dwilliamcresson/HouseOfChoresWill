var chores = require("../models/chores.js");


module.exports = (app) => {

	app.get("/api/testing", (req, res) => {
    res.render('testing');
  });
	
	
	
	app.post("/api/addtask", (req, res) => {
		console.log(req.body);
		let cols = ['user_id', 'task_id', 'sched_day'];
		let vals = [req.body.userID, req.body.task, req.body.day];
		const newtask = chores.create(cols, vals, function(result) {
			
			res.status(200).json(result);
			
		})
		
	});
  
}