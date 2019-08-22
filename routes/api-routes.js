const db = require('../models');

module.exports = function(app) {
    
    // (C: Create) POST route for creating a new listing to the database
    app.post("/api/music", (req, res) => {
        db.Music.create({
            artist: req.body.artist,
            title: req.body.title
        }).then(function (results) {
            res.json(results);
        }).catch(function (err) {
            console.log("Error: ", err);
            res.sendStatus(500);
        });
    });

    // (R: Read) GET -> findOne route for getting 1 listing from the Music database
    app.get("/api/music/:artist", (req, res) => {
        db.Music.findOne({
            where: {
                artist: req.params.artist
            }
        }).then(results => {
            res.json(results);
        }).catch(err => {
            console.log("Error:", err);
            res.sendStatus(500);
        })
    });

    // (R: Read) GET -> findOne route for getting 1 listing from the Music database
    app.get("/api/music/:title", (req, res) => {
        db.Music.findOne({
            where: {
                title: req.params.title
            }
        }).then(results => {
            res.json(results);
        }).catch(err => {
            console.log("Error:", err);
            res.sendStatus(500);
        })
    });

    // (R: Read) GET -> findAll route for retrieving any listings from the Music database
    app.get("/api/music", (req, res) => {
        db.Music.findAll({}).then(results => {
            res.json(results);
        }).catch(err => {
            console.log("Error: ", err);
            res.sendStatus(500);
        });
    });

    // (U: Update) PUT route for updating any music listing in the music database
    app.put("/api/music", function(req, res) {
        db.Music.update({
            artist: req.body.artist,
            title: req.body.title,
        }, {
            where: {
                id: req.body.id
            }
        }).then(function(results) {
            res.json(results);
        }).catch(function(err) {
            console.log("Error: ", err);
            res.sendStatus(500);
        });
    });

    // (D: Delete) DELETE route for removing / deleting any listing
    app.delete("/api/music/:id", (req, res) => {
        db.Music.destroy({
            where: {
                id: req.params.id
            }
        }).then(results => {
            res.json(results);
        }).catch((err) => {
            console.log("Error: ", err);
            res.sendStatus(500);
        });
    });

    // AVG
    app.get("/api/music", (req, res) => {
        db.Music.findAll({
            attributes: ['userId', [models.sequelize.fn('AVG', 
            models.sequelize.col('rating')), 'ratingAvg']],
            group: ['userId'],
            order: [[models.sequelize.fn('AVG', models.sequelize.col('rating')), 'ASC']]
        }).then(function() {
            //Do something
        })
    });

};