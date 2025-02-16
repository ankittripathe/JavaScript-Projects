// Select elements
let storeInput = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");

// Variable to store the current expression
let currentDisplay = "";

buttons.forEach((eachBtn) => {
  eachBtn.addEventListener("click", (evt) => {
    // console.log(evt.target.innerHTML);
    // storing (evt.target.innerHTML) to new varibale for better understanding
    const buttonText = evt.target.innerHTML;
    if (buttonText === "AC") {
      // clear All
      currentDisplay = "";
      storeInput.value = currentDisplay;
    } else if (buttonText === "DEL") {
      // Remove the last character
      currentDisplay = currentDisplay.slice(0, -1);
      storeInput.value = currentDisplay;
    } else if (buttonText === "=") {
      try {
        // Evaluate the expression
        currentDisplay = eval(currentDisplay);
        storeInput.value = currentDisplay;
      } catch (err) {
        currentDisplay = "Error"; // Handle invalid expressions
        storeInput.value = currentDisplay;
      }
    } else {
      // Append the button's text to the expression
      currentDisplay += buttonText; // currentDisplay = currentDisplay + buttonText;
      storeInput.value = currentDisplay;
    }
    // console.log(currentDisplay);
  });
});