const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ulIngredients = document.querySelector("#ingredients");

const list = ingredients.map((items) => {
  const liIngredients = document.createElement("li");
  liIngredients.textContent = items;

  liIngredients.classList.add("item");
  return liIngredients;
});

ulIngredients.append(...list);
console.log(ulIngredients);
// console.log(list);
