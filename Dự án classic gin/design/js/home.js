var title_header_show_h1 = document.querySelector(".title_header_show_h1");
var div_design_1 = document.querySelector(".div_design_1");
var content_design_1 = document.querySelector(".content_design_1");
var div_design_2 = document.querySelector(".div_design_2");
var div_design_3 = document.querySelector(".div_design_3");
var div_design_2_1 = document.querySelector(".div_design_2_1");
var div_design_2_4 = document.querySelector(".div_design_2_4");
var title_div_design_2_2 = document.querySelector(".title_div_design_2_2");
var card_product1 = document.querySelectorAll(".card_product1");
var card_product2 = document.querySelectorAll(".card_product2");

var div_info_me1 = document.querySelector(".div_info_me1");

var div_swiper = document.querySelector(".div_swiper");

var i = 0;
var txt = "Welcome to my store";
var speed = 100;
function typeWriter() {
  if (i < txt.length) {
    title_header_show_h1.innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
  if (i == txt.length) {
    return;
  }
}
window.addEventListener("scroll", () => {
  var scrollHeight = window.scrollY;
  console.log(scrollHeight);
  var x = screen.width;
  // console.log(x);
  //
  if (scrollHeight > 190) {
    // div_design_1.classList.remove("start_onscroll");
    div_design_1.classList.add("slide-in-blurred-top");
    content_design_1.classList.add("tracking-in-contract-bck");
  } else {
    // div_design_1.classList.add("start_onscroll");
    content_design_1.classList.remove("tracking-in-contract-bck");

    // div_design_1.classList.remove("slide-in-blurred-top");
  }
  // div_design_2
  if (scrollHeight > 600) {
    div_design_2.classList.remove("start_onscroll");
    div_design_2.classList.add("slide-in-elliptic-right-bck");
  } else {
    div_design_2.classList.add("start_onscroll");
    div_design_2.classList.remove("slide-in-elliptic-right-bck");
  }
  if (scrollHeight > 1000) {
    div_design_3.classList.remove("start_onscroll");
    div_design_3.classList.add("slide-in-blurred-top");
  } else {
  }
  if (scrollHeight > 1300) {
    title_div_design_2_2.classList.remove("start_onscroll");
    title_div_design_2_2.classList.add("slide-in-blurred-top");
  } else {
  }
  if (scrollHeight > 1400) {
    card_product1.forEach((item) => {
      item.classList.remove("start_onscroll");
      item.classList.add("slide-in-blurred-top");
    });
    div_design_2_1.classList.remove("start_onscroll");
    div_design_2_1.classList.add("slide-in-blurred-top");
  } else {
    card_product1.forEach((item) => {
      item.classList.add("start_onscroll");
      item.classList.remove("slide-in-blurred-top");
    });
  }
  if (x > 1000) {
    if (scrollHeight > 2450) {
      card_product2.forEach((item) => {
        item.classList.remove("start_onscroll");
        item.classList.add("slide-in-blurred-top");
      });
    } else {
      card_product2.forEach((item) => {
        item.classList.add("start_onscroll");
        item.classList.remove("slide-in-blurred-top");
      });
    }
    if (scrollHeight > 3000) {
      div_design_2_4.classList.remove("start_onscroll");
      div_design_2_4.classList.add("slide-in-blurred-top");
    }
    if (scrollHeight > 3200) {
      div_info_me1.classList.remove("start_onscroll");
      div_info_me1.classList.add("tracking-in-contract");
    } else {
      div_info_me1.classList.add("start_onscroll");
      div_info_me1.classList.remove("tracking-in-contract");
    }
    if (scrollHeight > 3400) {
      div_info_me1.classList.remove("start_onscroll");

      div_swiper.classList.add("slide-in-elliptic-top-fwd");
    }
  } else if (x < 1000 && x > 700) {
    if (scrollHeight > 2000) {
      card_product2.forEach((item) => {
        item.classList.remove("start_onscroll");
        item.classList.add("slide-in-blurred-top");
      });
    } else {
      card_product2.forEach((item) => {
        item.classList.add("start_onscroll");
        item.classList.remove("slide-in-blurred-top");
      });
    }
    if (scrollHeight > 2300) {
      div_design_2_4.classList.remove("start_onscroll");
      div_design_2_4.classList.add("slide-in-blurred-top");
    }
    if (scrollHeight > 2600) {
      div_info_me1.classList.remove("start_onscroll");
      div_info_me1.classList.add("tracking-in-contract");
    } else {
      div_info_me1.classList.add("start_onscroll");
      div_info_me1.classList.remove("tracking-in-contract");
    }
    if (scrollHeight > 2600) {
      div_info_me1.classList.remove("start_onscroll");

      div_swiper.classList.add("slide-in-elliptic-top-fwd");
    }
  } else if (x <= 700) {
    if (scrollHeight > 1700) {
      card_product2.forEach((item) => {
        item.classList.remove("start_onscroll");
        item.classList.add("slide-in-blurred-top");
      });
    } else {
      card_product2.forEach((item) => {
        item.classList.add("start_onscroll");
        item.classList.remove("slide-in-blurred-top");
      });
    }
    if (scrollHeight > 1900) {
      div_design_2_4.classList.remove("start_onscroll");
      div_design_2_4.classList.add("slide-in-blurred-top");
    }
    if (scrollHeight > 2000) {
      div_info_me1.classList.remove("start_onscroll");
      div_info_me1.classList.add("tracking-in-contract");
    } else {
      div_info_me1.classList.add("start_onscroll");
      div_info_me1.classList.remove("tracking-in-contract");
    }
    if (scrollHeight > 2000) {
      div_info_me1.classList.remove("start_onscroll");

      div_swiper.classList.add("slide-in-elliptic-top-fwd");
    }
  }
});
var swiper = new Swiper(".mySwiper", {
  effect: "cube",
  grabCursor: true,
  cubeEffect: {
    shadow: false,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.94,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});
