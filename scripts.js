


const genres = ["Action", "Comedy", "Horror","crime"];

// finds the "spinButton" element
const button = document.getElementById("spinButton");
const result = document.getElementById("result");

button.addEventListener("click", function() {
    const randomIndex = Math.floor(Math.random() * genres.length);
   const selectedGenre = genres[randomIndex];
   
   //prints the result to webpage
    result.textContent = "You Got: " + selectedGenre;
});
