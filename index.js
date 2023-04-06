// getting-started.js
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
	await mongoose.connect('mongodb://127.0.0.1:27017/movies');
	console.log("We are connected!!!")
}

const movieSchema = new mongoose.Schema({
	title: String,
	year: Number,
	score: Number,
	rating: String
});

const Movie = mongoose.model('Movie', movieSchema);

const amadeus = new Movie({title: 'Amadeus', year: 1986, score: 9.2, rating: 'R'});
amadeus.save();
 
Movie.insertMany([
	{title: 'Amelie', year: 2001, score: 8.3, rating: 'R'},
	{title: 'Alien', year: 1979, score: 8.1, rating: 'R'},
	{title: 'The Iron Giant', year: 1999, score: 7.5, rating: 'PG'},
	{title: 'Stand By Me', year: 1986, score: 8.6, rating: 'R'},
	{title: 'Moonrise Kingdom', year: 2012, score: 7.3, rating: 'PG-13'}
])
.then(data => {
	console.log("It worked!");
	console.log(data);
}
)
.catch(err => {
	console.log("Oh no, error!");
	console.log(err);
}
);
// Path: index.js
// getting-started.js
// const mongoose = require('mongoose');
// const Movie = require('./models/movie');
// const Review = require('./models/review');
// const User = require('./models/user');
// main().catch(err => console.log(err));

	