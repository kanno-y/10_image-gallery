const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

/* Declaring the array of image filenames */
array = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"];

/* Looping through images */
array.forEach((element) => {
  const newImage = document.createElement("img");
  newImage.setAttribute("src", `images/${element}`);
  newImage.addEventListener("click", () => {
    displayedImage.setAttribute("src", `images/${element}`);
  });
  thumbBar.appendChild(newImage);
});

/* Wiring up the Darken/Lighten button */
btn.addEventListener("click", trigger);

/* Function */
// オーバーレイ表示切り替え
function trigger() {
  attr = btn.getAttribute("class");
  if (attr === "dark") {
    btn.setAttribute("class", "light");
    btn.textContent = "Lighten";
    overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  } else {
    btn.setAttribute("class", "dark");
    btn.textContent = "Darken";
    overlay.style.backgroundColor = "rgba(0, 0, 0, 0)";
  }
}
