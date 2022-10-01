import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';
import paginationView from './views/paginationView.js';
import bookmarksView from './views/bookmarksView.js';
import AddRecipeView from './views/AddRecipeView.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { async } from 'regenerator-runtime';
import addRecipeView from './views/AddRecipeView.js';

if (module.hot) {
  module.hot.accept();
}

const controlRecipe = async function () {
  try {
    const id = window.location.hash.slice(1);

    if(!id) return;
    recipeView.renderSpinner();

    // Update result view to mark selected

    resultsView.update(model.getSearchResultPage());
    
    // Updating the bookmarks view
    bookmarksView.update(model.state.bookmarks);
    
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
  recipeView.update(model.state.recipe);
}

const controlAddBookmark = function () {
  //Add/remove bookmark
  if (!model.state.recipe.bookmarked) model.addBookmark(model.state.recipe);
  else  
  model.deleteBookmark(model.state.recipe.id);

  // Update the recipe View
  recipeView.update(model.state.recipe);

  // Render bookmarks
  bookmarksView.render(model.state.bookmarks);

}

const controlBookmarks = function () {
  bookmarksView.render(model.state.bookmarks);
}

const controlAddRecipe = function (newRecipe) {
  console.log(newRecipe);
}

const init = function() {
  bookmarksView.addHandlerRender(controlBookmarks);
  recipeView.addHandlerRender(controlRecipe);
  recipeView.addHandlerUpdateServings(controlServings);
  recipeView.addHandlerAddBookmark(controlAddBookmark);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
  addRecipeView.addHandlerUpload(controlAddRecipe);
}

init();

const clearBookmarks = function () {
  localStorage.clear('bookmarks');
}