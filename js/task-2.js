import ingredients from './ingredients.js';

// console.table(ingredients);

const createIngredientCard = ingredient => {
  const liRef = document.createElement('li');
  liRef.textContent = ingredient;

  return liRef;
};

const ingredientCard = ingredients.map(ingredient =>
  createIngredientCard(ingredient),
);

const ulRef = document.querySelector('#ingredients');
console.log(ulRef);

ulRef.append(...ingredientCard);
