// (1) Selecting button bat
const batBtn = document.getElementById("batBtn");

batBtn.addEventListener("click", () => {
  const choices = ["Bat", "Ball", "Stump"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  const computerChoice = choices[randomIndex];

  let resultMsg = "";
  if (computerChoice === "Ball") {
    resultMsg = "You Win";
  } else if (computerChoice === "Bat") {
    resultMsg = "It's a Tie";
  } else if (computerChoice === "Stump") {
    resultMsg = "Computer Win";
  }

  alert(
    `You have chosen Bat. Computer choice is ${computerChoice} and ${resultMsg}`
  );
  console.log(resultMsg);
});

// (2) Selecting button ball
const ballBtn = document.getElementById("ballBtn");

ballBtn.addEventListener("click", () => {
  const choices = ["Bat", "Ball", "Stump"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  const computerChoice = choices[randomIndex];

  let resultMsg = ""; // Declare the variable

  if (computerChoice === "Ball") {
    resultMsg = `It's a Tie`;
  } else if (computerChoice === "Bat") {
    resultMsg = "Computer Win";
  } else if (computerChoice === "Stump") {
    resultMsg = "You Win";
  }
  alert(
    `You have chosen Ball. Computer Choice is ${computerChoice} and ${resultMsg}`
  );
  console.log(resultMsg);
});

// (3) Selecting stump btn
const stumpBtn = document.getElementById("stumpBtn");

stumpBtn.addEventListener("click", () => {
  const choices = ["Bat", "Ball", "Stump"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  const computerChoice = choices[randomIndex];

  let resultMsg = ""; // Declare the variable
  if (computerChoice === "Ball") {
    resultMsg = "Computer Win";
  } else if (computerChoice === "Bat") {
    resultMsg = "You Win";
  } else if (computerChoice === "Stump") {
    resultMsg = `It's a Tie`;
  }
  alert(
    `You have chosen Stump. Computer Choice is ${computerChoice} and ${resultMsg}`
  );
});
