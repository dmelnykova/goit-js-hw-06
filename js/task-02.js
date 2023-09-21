const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');

const ingredientItems = document.createElement("li");

const liArray = ingredients.map(ingredient => {
  const ingredientItems = document.createElement("li");
  ingredientItems.classList.add('item');
  ingredientItems.textContent = `${ingredient}`;
  return ingredientItems;
});

list.append(...liArray);
console.log(list);