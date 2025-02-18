const stars = document.querySelectorAll(".fa-star-o"); // All star elements
let currentRating = 0; // Variable to store the current rating

// Loop through each star
stars.forEach((star, index) => {
  star.dataset.index = index + 1; // Set the star's data-index as 1, 2, 3, etc.

  // Mouseover: Highlight stars on hover
  star.addEventListener("mouseover", () => highlightStars(index + 1));

  // Click: Set the rating and update the display
  star.addEventListener("click", () => setRating(index + 1));

  // Mouse leave: Reset stars to the current rating
  star.addEventListener("mouseleave", () => highlightStars(currentRating));
});

// Function to highlight stars
function highlightStars(rating) {
  stars.forEach((star, index) => {
    if (index < rating) {
      star.classList.replace("fa-star-o", "fa-star"); // Fill star
    } else {
      star.classList.replace("fa-star", "fa-star-o"); // Empty star
    }
  });
}

// Function to set the current rating after click
function setRating(rating) {
  currentRating = rating;
  highlightStars(currentRating); // Highlight the selected stars
  document.querySelector(".selected-rating-value").textContent = currentRating; // Display rating
}
