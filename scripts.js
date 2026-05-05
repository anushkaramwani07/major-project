console.log("JS IS RUNNING ON THIS PAGE");

const genreSelect = document.getElementById("genre-selection");

//console shows whatever user picked.
genreSelect.addEventListener("change", function(){
    const selectGenre = this.value;

    console.log("selected genre:", selectGenre);
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
  "Science Fiction": 878,
}
// scripts for major project

// first sign up for API Read Access Token and Key at https://www.themoviedb.org/settings/api
// then use options copied from https://developer.themoviedb.org/reference/discover-movie

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

    // get the list of genres and output to console
    getData('https://api.themoviedb.org/3/genre/movie/list?language=en', options).then(function(result) {

        console.log("genre list:", result);

    });

    // "comedy" is genre # 35, so if we search for that...
    let genreNumber = 35;
    let genreSearchURL = 'https://api.themoviedb.org/3/discover/movie?with_genres=' + genreNumber;
    getData(genreSearchURL, options).then(function(result) {

        console.log("discover results:", result);

        // find the first item in those results
        console.log("first result:", result.results[0].original_title);
    });

});


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

    previousEndDegree = newEndDegree;
  });
}

wheelOfFortune('.ui-wheel-of-fortune');