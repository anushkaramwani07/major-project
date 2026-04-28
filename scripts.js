


const genres = ["Action", "Comedy", "Horror","crime"];

const button = document.getElementById("spinButton");
const result = document.getElementById("result");

button.addEventListener("click", function() {
    const randomIndex = Math.floor(Math.random() * genres.length);
   const selectedGenre = genres[randomIndex];
   
    result.textContent = "You Got: " + selectedGenre;
});
