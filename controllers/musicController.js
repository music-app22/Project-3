const db = require('../models');

module.exports = {
    create: (req, res) => {
        db.Music
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.statius(422).json(err));
    },
    findAll: (req, res) => {
        db.Music
            .find(req.body.query)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findById: (req, res) => {
        db.Music
            .findById(req.params.dislikes)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    update: (req, res) => {
        db.Music
            .where({
                artist: req.body.artist,
                title: req.body.title,
                likes: req.body.likes,
                dislikes: req.body.dislikes
            }, {
                returning: true
            })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    remove:(req, res) => {
        db.Music
            .findById()
            .then(dbModel => db.Model.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};