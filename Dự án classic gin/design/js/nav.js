var navbar_expand_lg = document.querySelector(".navbar-expand-lg");
var percent_nav = document.querySelector(".percent_nav");
var back_to_top = document.querySelector("#back_to_top");
var year = document.querySelector("#year");
var now_year = new Date();
year.innerHTML = ` ${now_year.getFullYear()} `;
window.addEventListener("scroll", () => {
  if (window.scrollY > 700) {
    navbar_expand_lg.style.padding = "0 ";
    back_to_top.classList.remove("back_to_top_none");
  } else {
    back_to_top.classList.add("back_to_top_none");
    navbar_expand_lg.style.padding = "8px 0px ";
  }
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  // console.log(winScroll);
  var height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  percent_nav.style.width = `${scrolled}%`;
});
