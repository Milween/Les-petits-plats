let recipes = [];

async function getDataJson() {
  const response = await fetch ('data/recipes.json');
  recipes = (await response.json()).recipes;
  init();
}
/*** Afficher les cards ***/
function displayData(recipes) {
  const recipeSection = document.getElementById('recipes__cards');
  recipeSection.innerHTML = '';
  for (const recipe of recipes) {
    /* getRecipeCard is defined in recipes_cards.js */
    // eslint-disable-next-line no-undef
    const recipeCard = getRecipeCard(recipe);
    recipeSection.appendChild(recipeCard);
  }
}

function init() {
  /* Afficher les recipes */ 
  displayData(recipes);
  /* Afficher les filtres */ 
  // eslint-disable-next-line no-undef
  filterIngredients();
  // eslint-disable-next-line no-undef
  filterAppliances();
  // eslint-disable-next-line no-undef
  filterUstensils();
  /* N'ouvrir qu'un seul filtre à la fois */ 
  // eslint-disable-next-line no-undef
  isArrowClicked();
  /* Remplir les filtres avec les données */ 
  // eslint-disable-next-line no-undef
  fillFilters(recipes);
}

getDataJson();