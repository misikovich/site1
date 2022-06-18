const colorThief = new ColorThief();
let img = document.querySelector(".cover-image.current");
let accentElements = document.querySelectorAll(".accent");
let color = null;


// Make sure image is finished loading
if (img.complete) {
    color = colorThief.getColor(img);
} else {
    image.addEventListener("load", function () {
        color = colorThief.getColor(img);
});
}

document.documentElement.style.setProperty(
  "--accent-color",
  `rgb(${color[0]}, ${color[1]}, ${color[2]})`
);
// accentElements.style.background=`rgb(${color[0]}, ${color[1]}, ${color[2]})`;