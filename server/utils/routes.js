const Movies = require('../controllers/movies');

module.exports = app => {
    app.get("/movies", Movies.getAll);
    app.get("/movies/:_id", Movies.getOne);
    app.post("/movies", Movies.create);
    app.put("/movies/:_id", Movies.update);
    app.delete("/movies/:_id", Movies.remove);
}