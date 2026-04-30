


const genres = ["Action", "Comedy", "Horror", "crime"];

// finds the "spinButton" element

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
/*
JavaScript only required for spin interaction, not for rendering the component.
*/

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

// Usage
wheelOfFortune('.ui-wheel-of-fortune');