
console.log("JS IS RUNNING ON THIS PAGE");

const apiKey = "ce9abacc48c7d1abc05b7ee6f534452a";

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZTlhYmFjYzQ4YzdkMWFiYzA1YjdlZTZmNTM0NDUyYSIsIm5iZiI6MTc3NzUwNDE0NS41MDgsInN1YiI6IjY5ZjI4ZjkxMmJmMWFjNDhiNmQ3MmZhOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0U3LtyDpkEPx5jU38J2o6QD-hwkHYTIto7C-D_7Js2c'
    /*Had initially: Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZTlhYmFjYzQ4YzdkMWFiYzA1YjdlZTZmNTM0NDUyYSIsIm5iZiI6MTc3NzUwNDE0NS41MDgsInN1YiI6IjY5ZjI4ZjkxMmJmMWFjNDhi'*/
  }
};

console.log("JS is connected!");
async function testTMDB() {
  //1. Fetch the data and wait for teh response
  const response = await fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=35', options)
  
 /*had initially: fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=comedy`, options); */
 //2. turn the response into JSON data 
 const data = await response.json();

 //3.to print the list
  console.log("Comedy Movie list:", data.results);
// https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=comedy', options
  //console.log(data);
}
testTMDB();

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


const result = document.getElementById("result");
/*
//it should not crash on pages with no spin the wheel feature:
if (button) {

    button.addEventListener("click", function () {
        const randomIndex = Math.floor(Math.random() * genres.length);
        const selectedGenre = genres[randomIndex];

        //prints the result to webpage
        result.textContent = "You Got: " + selectedGenre;
    
});
}

//helps randomly select and display what the uder chose
const genreSelect = document.querySelectorAll("genreBtn");
const manualResult = document.getElementById("manualResult");

if(genreButtons.length > 0){
    genreButtons.forEach(function (btn){

        btn.addEventListener("click", function(){
                const selected = btn.textContent;
                manualResult.textContent = "You Picked: " + selected;
        })
    })
}

JavaScript only required for spin interaction, not for rendering the component.
*/

// Usage
wheelOfFortune('.ui-wheel-of-fortune');