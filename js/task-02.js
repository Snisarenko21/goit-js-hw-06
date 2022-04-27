const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientsEl = document.querySelector("#ingredients");

const result = ingredients.map(element => {
const listElem = document.createElement("li");
listElem.textContent = (`${element}`) ;
listElem.classList.add("item");
  return listElem;
})
console.log(result);
ingredientsEl.append(...result);





