const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listOfingredientsRef = document.querySelector('#ingredients');

// const elements = ingredients.map(ingredientName => {
//   const ingredientRef = document.createElement('li');
//   ingredientRef.classList.add('item');
//   ingredientRef.textContent = ingredientName;

//   return ingredientRef;
// });

// listOfingredientsRef.append(...elements);
// console.log(document.querySelector('#ingredients'));

const makeListOfIngredients = (ingredientNames) => {
  return ingredientNames.map(ingredientName => {
    const ingredientRef = document.createElement('li');
    ingredientRef.classList.add('item');
    ingredientRef.textContent = ingredientName;

    return ingredientRef;
  });
};

const elements = makeListOfIngredients(ingredients);
listOfingredientsRef.append(...elements);

console.log(document.querySelector('#ingredients'));