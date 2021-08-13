// toogle expand more features list 
const viewMoreFeatures = document.querySelector("#view_more_features");
const moreFeatures = document.querySelector("#more-features");

viewMoreFeatures.addEventListener("click", expand); 

function expand () {
    moreFeatures.classList.toggle("show");
}

//fap accordeon

const bars = document.querySelectorAll(".bar");

bars.forEach((bar) => {
  bar.addEventListener("click", () => {
    bar.nextElementSibling.classList.toggle("visible");
    });
});
