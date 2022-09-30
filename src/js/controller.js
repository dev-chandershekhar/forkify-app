import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';
import paginationView from './views/paginationView.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { async } from 'regenerator-runtime';

if (module.hot) {
  module.hot.accept();
}

const controlRecipe = async function () {
  try {
    const id = window.location.hash.slice(1);

    if(!id) return;

    recipeView.renderSpinner();

    // Loading Recipes
    await model.loadRecipe(id);

    // Rendering Recipe
    recipeView.render(model.state.recipe);

   
  } catch (err) {
    recipeView.renderError();
  }
};

const controlSearchResults = async function() {
  try {
    resultsView.renderSpinner();

    const query = searchView.getQuery();

    if (!query) return;

    await model.loadSearchResult(query);

    resultsView.render(model.getSearchResultPage());

    paginationView.render(model.state.search);

  } catch(err) {
    console.log(err);
  }
}

const controlPagination = function(goToPage) {
   resultsView.render(model.getSearchResultPage(goToPage));

   paginationView.render(model.state.search);
}

const controlServings = function(newServings) {
  // Update the servings (in state)
  model.updateServings(newServings);

  // Update the recipe view
  recipeView.render(model.state.recipe);
}

const init = function() {
  recipeView.addHandlerRender(controlRecipe);
  recipeView.addHandlerUpdateServings(controlServings);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);

}

init();