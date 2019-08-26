// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var db = require("../models");
// var Op = require("sequelize").Op;

// Routes
// =============================================================
module.exports = function(app) {
  // ajax routes for all makes
  app.get("/api/allmakes", function(req, res) {
    db.make.findAll({}).then(function(results) {
      res.json(results);
    });
  });


    // ajax routes for all models
    app.get("/api/allmodels", function(req, res) {
      db.model.findAll({}).then(function(results) {
        res.json(results);
      });
    });

  // Get a specific make
  app.get("/api/:make", function(req, res) {
    db.make.findAll({
      where: {
        name: req.params.make
      }
    }).then(function(results) {
      res.json(results);
    });
  });



  // Get all models of a specific make
  app.get("/api/model/:model", function(req, res) {
    db.model.findAll({
      where: {
        name: req.params.model
      }
    }).then(function(results) {
      res.json(results);
    });
  });

  // Create a new make
  app.post("/api/makes", function(req, res) {
    db.make.create(req.body).then(function(dbMake) {
      res.json(dbMake);
    });
  });

    // Delete an make by id
    app.delete("/api/makes/:id", function(req, res) {
      db.make.destroy({ where: { id: req.params.id } }).then(function(dbMake) {
        res.json(dbMake);
      });
    });
  };
  

