let inputElm = document.getElementById("inputfield");
let clickBtn = document.querySelector(".btn");
let todoElm = document.querySelector(".todoListsElm");

let addTodo = () => {
  //   console.log(inputElm.value);
  let liElem = document.createElement("li");
  liElem.textContent = inputElm.value;
  //   console.log(liElem);
  todoElm.append(liElem); // append huwa li

  inputElm.value = ""; // null ho jaega
};

clickBtn.addEventListener("click", () => {
  addTodo();
});
