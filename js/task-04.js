const btnDel = document.querySelector(`button[data-action="decrement"]`);
console.log(btnDel);

const btnAdd = document.querySelector(`button[data-action="increment"]`);
console.log(btnAdd);

const valueEl = document.querySelector("#value");

let counterValue = 0;

btnDel.addEventListener("click", function valuedel() {
 valueEl.textContent = counterValue -= 1;
});

btnAdd.addEventListener("click", function valueAdd() {
valueEl.textContent = counterValue += 1;
});








