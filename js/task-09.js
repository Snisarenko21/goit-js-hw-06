
const bodyEl = document.querySelector("body");

const btnEl = document.querySelector("button");

const spanEl = document.querySelector(".color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

btnEl.addEventListener("click", onClickButton);

function onClickButton() {
   bodyEl.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;

   spanEl.textContent = bodyEl.style.backgroundColor;
  
   console.log(spanEl.textContent);
};