var page_item = document.querySelectorAll(".page_item");
// pagination
page_item.forEach((item) => {
  item.addEventListener("click", (event) => {
    page_item.forEach((item) => {
      item.classList.remove("page_active");
    });
    event.currentTarget.classList.add("page_active");
  });
});
// onscroll
var div_setting = document.querySelector(".div_setting");
window.addEventListener("scroll", () => {
  var height = window.scrollY;
  console.log(window.scrollY);
  if (height >= 600) {
    div_setting.classList.remove("div_setting_hide");
  } else {
    div_setting.classList.add("div_setting_hide");
  }
});
