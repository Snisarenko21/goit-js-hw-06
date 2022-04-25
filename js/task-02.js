const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector("#ingredients");

const result = ingredients.forEach((element) => {
  const itemEl = document.createElement("li");

  itemEl.textContent = element;
  itemEl.classList.add("item");
  listEl.append(itemEl);
});
console.log(listEl);