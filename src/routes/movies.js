const { Router } = require('express');
const router = Router();

const _ = require('underscore');

const movies = require('../sample.json');
// console.log(movies);

router.get('/movies', (req, res) => {
    res.json(movies);
});

router.post('/movies', (req, res) => {
    // console.log(req.body);
    const { title, director, year, rating } = req.body;

    if (title && director && year && rating) {
        const id = movies.length + 1;
        const newMovie = {id, ...req.body};
        console.log(newMovie)
        // res.json('saved');
        movies.push(newMovie)
        res.json(movies);
    }else {
        // res.send('Wrong Request');
        res.status(500).json({error: 'There was an error.'});
    }
});

router.put('/movies/:id', (req, res) => {
    const {id} = req.params;
    const {title, director, year, rating} = req.body;
    if (title && director && year && rating) {
        _.each(movies, (movie, i) => {
            if (movie.id == id) {
                movie.title = title;
                movie.director = director;
                movie.year = year;
                movie.rating = rating;
            }  
        });
    } else {
        res.status(500).json({error: 'There was an error.'});
    }
});

router.delete('/movies/:id', (req, res) => {
    const {id} = req.params;
    if (id) {
        _.each(movies, (movie, i) => {
            if (movie.id == id) {
                movies.splice(i, 1);
            }
        });
        // console.log(req.params);
        res.json(movies);
    }else {
        res.status(500).json({error: 'There was an error.'});
    }
});

module.exports = router;