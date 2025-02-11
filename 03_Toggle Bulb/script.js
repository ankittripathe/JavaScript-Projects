// Get the image and button elements
let img1 = document.getElementById("myImage");
let btn1 = document.getElementById("togglebtn1");
let btn2 = document.getElementById("togglebtn2");
let holeBg = document.querySelector("body");

// Add event listener to btn1
btn1.addEventListener("click", () => {
  // Check the image source using endsWith() to handle the full URL
  if (img1.src.endsWith("image/pic_bulboff.gif")) {
    img1.src = "image/pic_bulbon.gif"; // Change to "on" image
  }
  holeBg.style.backgroundColor = "bisque";
});

// Add Event Listner to btn2
btn2.addEventListener("click", () => {
  // Check the image source using includes()
  if (img1.src.includes("image/pic_bulbon.gif")) {
    img1.src = "image/pic_bulboff.gif";
  }
  holeBg.style.backgroundColor = "white";
});
