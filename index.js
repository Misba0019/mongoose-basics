const mongoose = require('mongoose'); // Require mongoose

async function connectToDatabase() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/movieApp');
        console.log('MongoDB connected');
    } catch (err) {
        console.error('Connection Error:', err);
    }
}
connectToDatabase(); // Connecting to MongoDB in that Mongo server

const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number, 
    rating: String
}) // Defined a Movie Schema in a shorthand way

const Movie = mongoose.model('Movie', movieSchema); // Capital letter in the start of the Model
// const first = new Movie({title: '2012', year: 2009, score: 5.8, rating: 'PG-13'}); // Creating a new Movie

// Movie.insertMany([
//     { title: 'Amelie', year: 2001, score: 8.3, rating: 'R' },
//     { title: 'Alien', year: 1979, score: 8.1, rating: 'R' },
//     { title: 'The Iron Giant', year: 1999, score: 7.5, rating: 'PG' },
//     { title: '2012', year: 2009, score: 5.8, rating: 'PG-13' },
// ]) // Inserting Many Movies with the help of insertMany()
// .then(data => {
//     console.log("It Worked");
//     console.log(data);
// }) // Promise
// Here, we're creating a new Movies and saving it in the database

// Use db.movies.find() to find all movies in the DataBase.