


const genres = ["Action", "Comedy", "Horror", "crime"];

// finds the "spinButton" element
const button = document.getElementById("spinButton");
const result = document.getElementById("result");

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