var chores = require("../models/chores.js");

module.exports = (app) => {


    app.get("/", (req, res) => {
        console.log("***** Inside routes.js *******");
        res.render('index');
        chores.all(function(data) {
            var hbsObject = {
                chores: data
            };
            console.log("***** Inside routes.js *******");
            console.log(hbsObject);
            //res.send("Sup");
        });


        //}

        // app.get("/", (req, res) => {
        //     chores.all(function(data) {
        //         var hbsObject = {
        //             chores: data
        //         };
        //         console.log("***** Inside routes.js *******");
        //         console.log(hbsObject);
        //         res.render("index", hbsObject);
        //     });
    });
}