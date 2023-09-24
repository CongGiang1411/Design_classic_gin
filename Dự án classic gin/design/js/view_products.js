var zoom_div = document.querySelectorAll(".img_products");
var zoom_img = document.querySelectorAll(".zoom_img");
var zoom = document.querySelector(".zoom");
var src_img = null;
zoom_img.forEach((item) => {
  item.addEventListener("mousemove", function () {
    src_img = this.src;
  });
});
zoom_div.forEach((item) => {
  item.addEventListener("mousemove", function (e) {
    let w = this.offsetWidth;
    let h = this.offsetHeight;
    let start_w = e.pageX - this.offsetLeft;
    let start_h = e.pageY - this.offsetTop;
    let percent_w = (start_w / w) * 100;
    let percent_h = (start_h / h) * 100;
    // console.log(this.offsetLeft, this.offsetTop);
    zoom.style.opacity = "1";
    zoom.style.transition = "opacity 1.5s";

    zoom.style.top = `${e.pageY}px`;
    zoom.style.left = `${e.pageX}px`;
    zoom.style.backgroundImage = `url("${src_img}")`;
    item.style.cursor = "none";
    zoom.style.backgroundPosition = `${percent_w}% ${percent_h}%`;
  });
  item.addEventListener("mouseleave", () => {
    zoom.style.opacity = "0";
    zoom.style.transition = "0s";
  });
});
// var dcm = document.querySelector(".img_products");
// dcm.addEventListener("mousemove", function () {
//   console.log(this.offsetLeft, this.offsetTop);
// });
