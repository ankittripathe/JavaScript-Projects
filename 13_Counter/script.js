// To prevent default loading
document.addEventListener("DOMContentLoaded", () => {
  // selecting elements
  const counterDisplay = document.getElementById("counter-display");
  const counterBtn = document.getElementById("counter-btn");

  // Initalize the count variable
  let count = 0;

  // Add Event Listener to the Button
  counterBtn.addEventListener("click", () => {
    count++; // Increment the count variable

    // update the innerHTML with new count value
    counterDisplay.innerHTML = `You clicked ${count} times`;
  });
});
