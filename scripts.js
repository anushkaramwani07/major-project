console.log("JS IS RUNNING ON THIS PAGE");

// get the dropdown element from your HTML/
const genreSelect = document.getElementById("genre-selection");

//get the paragraph where you show the result
const manualResult = document.getElementById("manual-result");

//get the div where movies will be displayed
const resultsDiv = document.getElementById("results");

const apiKey = "ce9abacc48c7d1abc05b7ee6f534452a";

//console shows whatever user picked.
genreSelect.addEventListener("change", function(){
    const selectGenre = this.value;

    console.log("selected genre:", selectGenre);
    fetchGenre(selectGenre);
});

const genreMap = {
  "Action": 28,
  "Adventure": 12,
  "Animation": 16,
  "Comedy": 35,
  "Crime": 80,
  "Drama": 18,
  "Fantasy": 14,
  "Horror": 27,
  "Mystery": 9648,
  "Romance": 10749,
  "Science Fiction": 878
}

const genres = [
  "Action",
  "Comedy",
  "Horror",
  "Crime",
  "Drama",
  "Romance",
  "Science Fiction",
  "Mystery",
  "Crime",
  "Adventure",
  "Animation",
  "Fantasy",
];


const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MjFiNzYwNjlmNjRiNjU5MmY4NGJiOTQ5YmQ5ZGVkNiIsIm5iZiI6MTc3NzkxNTYwMS41MzIsInN1YiI6IjY5ZjhkNmQxY2ZlMTA5OTNlYmRmNTczYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BOdM0xjg3W246TZQTxQtxeTRmgXZD73klu19tQkiWF8'
    }
};


// function for getting JSON data and returning it
async function getData(url, opts) {
    try {
        const response = await fetch(url, opts);
        if (response.ok) {
            const result = await response.json();
            return result;
        } else {
            throw(response.status);
        }
    } catch (error) {
        console.error(error);
    }
}
document.addEventListener("DOMContentLoaded", function () {

    
});

function fetchGenre(genreNumber) {
    let genreSearchURL = 'https://api.themoviedb.org/3/discover/movie?with_genres=' + genreNumber;
    getData(genreSearchURL, options).then(function(result) {

        console.log("genre results:", result);

        displayMovies(result);
    });
}

function displayMovies(movieData){
    const results = document.getElementById("results");
    results.innerHTML = ""; // Clear previous results

    movieData.results.forEach(function(movie) {
        console.log("movie:", movie);
        results.innerHTML += `
            <div class="movie-card">
            <h3>${movie.original_title}</h3>
            <p>Release Date: ${movie.release_date}</p>
            <p>Rating: ${movie.vote_average}</p>
            </div>
        `;
    });
}
// had this before h3 tag <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.original_title} poster"></img>

//wheeeeellll
function wheelOfFortune(selector) {
  const node = document.querySelector(selector);
  if (!node) return;

  const spin = node.querySelector('button');
  const wheel = node.querySelector('ul');
  let animation;
  let previousEndDegree = 0;

  spin.addEventListener('click', () => {
    if (animation) {
      animation.cancel(); // Reset the animation if it already exists
    }

    const randomAdditionalDegrees = Math.random() * 360 + 1800;
    const newEndDegree = previousEndDegree + randomAdditionalDegrees;

    animation = wheel.animate([
      { transform: `rotate(${previousEndDegree}deg)` },
      { transform: `rotate(${newEndDegree}deg)` }
    ], {
      duration: 4000,
      direction: 'normal',
      easing: 'cubic-bezier(0.440, -0.205, 0.000, 1.130)',
      fill: 'forwards',
      iterations: 1
    });

    
    animation.onfinish = function() {
      const finalDegree = newEndDegree % 360;
      const sliceSize = 360 / genres.length;

      // 🔑 adjust this if result is slightly off
      const pointerOffset = 90;

      //const adjustedDegree = (360 - finalDegree + pointerOffset) % 360;
      const adjustedDegree =  (360 - finalDegree + pointerOffset + sliceSize / 2) % 360;
        selectedIndex = Math.floor(adjustedDegree / sliceSize);

      const selectedGenre = genres[selectedIndex];

      // show result
      // selectedGenreDiv.innerHTML = `<h2>You got: ${selectedGenre}</h2>`;
        console.log("Spin result: ", selectedGenre);

      // fetch movies
      const genreId = genreMap[selectedGenre];
      const url =
        "https://api.themoviedb.org/3/discover/movie?with_genres=" + genreId;

      getData(url, options).then(function(result) {
        displayMovies(result);
      });
    };

    previousEndDegree = newEndDegree;
    console.log("End degree:", newEndDegree)
  });
}

wheelOfFortune('.ui-wheel-of-fortune');