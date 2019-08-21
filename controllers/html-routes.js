// this is for passport but copied over aerospace

var db = require("../models");


 






// // *********************************************************************************
// // html-routes.js - this file offers a set of routes for sending users to the various html pages
// // *********************************************************************************

// // Dependencies
// // =============================================================
 var path = require("path");
var express = require("express");
var router = express.Router();
var make = require("../models/make.js");
var model = require("../models/model.js");



// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/view.html"));
  });

  // add route loads the add.html page, where users can enter new songs to the db
  app.get("/add", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/add.html"));
    console.log("add");
  });

  // all route loads the all.html page, where all songs in the db are displayed
  app.get("/all", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/all.html"));
    console.log("all");
  });

   // Load make page and pass in an make by id
   app.get("/make/:id", function(req, res) {
    db.make.findOne({ where: { id: req.params.id } }).then(function(dbMake) {
      // res.sendFile(path.join(__dirname, "../public/")
      console.log(dbMake);
    });
  });

    // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    
    console.log("404");
  });
};
