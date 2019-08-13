const Movie = require('mongoose').model('Movie');

class MovieController {
    getAll(req, res){
        Movie.find({})
            .then(movies => res.json(movies))
            .catch(err => res.json(err));
    }
    getOne(req, res){
        Movie.findOne({_id: req.params._id})
            .then(movie => res.json(movie))
            .catch(err => res.json(err));
    }
    create(req, res){
        let m = new Movie(req.body);
        m.save()
            .then(() => res.json({status: "ok"}))
            .catch(err => res.json(err));
    }
    update(req, res){
        Movie.findOneAndUpdate({_id: req.params._id}, req.body, {runValidators: true})
            .then(() => res.json({status: "ok"}))
            .catch(err => res.json(err));
    }
    remove(req, res){
        Movie.findOneAndDelete({_id: req.params._id})
            .then(() => res.json({status: "ok"}))
            .catch(err => res.json(err));
    }
}

module.exports = new MovieController();