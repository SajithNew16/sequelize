//dependecies
var express = require("express");
var bodyparser = require("body-parser");

//set up the express app
var app = express();
var port = process.env.port || 3000;

var db = require('./model');

//set up the express app to handle body parser
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.text());

//static directory
app.use(express.static("public"));

db.sequelize.sync().then(function () {
    app.listen(port, function () {
        console.log('connected ...');
    })
})

//routes

//synching sequelize models and then starting our express app
app.listen(port, function () {
    console.log("App listening on port " + port);
});

