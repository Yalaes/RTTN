// toogle expand more features
const viewMoreFeatures = document.querySelector("#view_more_features");
const moreFeatures = document.querySelector("#more-features");

viewMoreFeatures.addEventListener("click", expand); 

function expand () {
    moreFeatures.classList.toggle("show");
}

//faQ accordeon

const bars = document.querySelectorAll(".bar");

bars.forEach((bar) => {
  bar.addEventListener("click", () => {
    bar.nextElementSibling.classList.toggle("visible");
    });
});

// nav bar change bg
const navbar = document.querySelector('nav');
const header_footer = document.querySelector(".header__footer");
window.onscroll = () => {
    if (window.scrollY > 300) {
        navbar.classList.add('opaque');
        header_footer.classList.add('opaque');
    } else {
        navbar.classList.remove('opaque');
        header_footer.classList.remove('opaque');
    }
};
