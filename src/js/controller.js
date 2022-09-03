import * as model from './model.js';
import recipeView from './views/recipeView.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

const recipeContainer = document.querySelector('.recipe');



// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////


const controlRecipe = async function () {
  try {
    const id = window.location.hash.slice(1);

    if(!id) return;

    recipeView.renderSpinner();

    await model.loadRecipe(id);
    const {recipe} = model.state;

    // Loading Recipes
    

    // Rendering Recipe
    recipeView.render(model.state.recipe);

   
  } catch (err) {
    alert(err);
  }
};

['hashchange', 'load'].forEach(ev => window.addEventListener(ev, controlRecipe));
