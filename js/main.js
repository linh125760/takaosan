// Menu Fixed when Scroll
const nav = document.querySelector("#myHeader");
const mediaQueryPC = window.matchMedia("(min-width: 769px)");

const NavTop = nav.offsetTop;
if (mediaQueryPC.matches) {
  function fixnavbar() {
    if (window.pageYOffset >= NavTop) {
      document.body.style.paddingTop = nav.offsetHeight + "px";
      document.body.classList.add("fixed-nav");
    } else {
      document.body.style.paddingTop = 0;
      document.body.classList.remove("fixed-nav");
    }
  }
}
window.addEventListener("scroll", fixnavbar);

// Check Menu Mobile, nonScroll
let body = document.querySelector("body");
let topPosition = 0;

$(".navigation__checkbox").click(function () {
  if ($(this).is(":checked")) {
    topPosition = window.pageYOffset;

    body.style.position = "fixed";
    body.style.width = "100%";
    body.style.top = -topPosition + "px";
  }
  if ($(this).is(":not(:checked)")) {
    body.style.removeProperty("position");
    body.style.removeProperty("width");
    body.style.removeProperty("top");

    window.scrollTo(0, topPosition);
  }
});

// Menu Active Add Class
var items = document.getElementsByClassName("list");

for (var i = 0; i < items.length; i++) {
  items[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}