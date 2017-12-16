var chores = require("../models/chores.js");

function distinct(chores) {
  var days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ];
  var table = {};
  var distinctUsers = chores.map(function(chore, i, arr) {
    return chore.user_id;
  }).filter((user_id, i, arr) => arr.indexOf(user_id) === i);

  var justUsers = chores.map(chore => ({user_id: chore.user_id, username: chore.username}));
  distinctUsers.forEach((id, i, arr) => {
    table[id] = {};
    var matched_user = justUsers.filter(user => user.user_id === id)[0];
    table[id].user_id = matched_user.user_id;
    table[id].username = matched_user.username;
    days.forEach(day => {
      table[id][day] = chores.filter(chore => {
        return chore.user_id === id && chore.sched_day === day;
      })
    })
  })
  return table;
}

module.exports = (app) => {

  app.get("/api/chores", (req, res) => {

    chores.all(function(data) {
      var formattedData = distinct(data);
      // res.json({formattedData});
      // return;
      var formattedObj = {
        chores: formattedData
      };
      console.log("***** Inside routes.js *******");
      console.log(formattedObj);

      res.status(200).json(formattedObj);

    });

  });

  app.get("/", (req, res) => {
    //console.log("***** Inside routes.js *******");
    res.render('index');

        chores.choreDays(function(data) {
            var hbsObject = {
                chores: data
            };
            // console.log("***** Inside routes.js *******");
            // console.log(hbsObject);
        });

        chores.alltasks(function(data) {
            var hbsObject = {
                chores: data
            };
            // console.log("***** Inside routes.js *******");
            // console.log(hbsObject);
        });
      

    })

    app.get("/", (req, res) => {
        chores.all(function(data) {
            var hbsObject = {
                chores: data
            };
            console.log("***** Inside routes.js *******");
            console.log(hbsObject);
            res.render("index", hbsObject);
        });
  });
}
