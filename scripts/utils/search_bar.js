/** recipesToDisplay is defined in tags.js **/
/** filteredRecipesWithTags is defined in tags.js **/
/** fillFilters is defined in filters_fill.js **/
/** DisplayData is defined in index.js **/

/* eslint-disable no-undef */

const searchBarInput = document.querySelector('.search__input');
const noResultText = document.querySelector('.no-result-message');

/** Fonction de recherche  **/
function searchLive() {
  let tagsUsed = false;
  recipesToDisplay = [];
  let mainInput;

  // Retourne un tableau 'recipeToDisplay' qui suit les règles de ma regex.
  if (searchBarInput.value.length > 2) {
    mainInput = searchBarInput.value;

    const regex = new RegExp(`${mainInput.trim().toLowerCase()}`);
    for (let i = 0; i < recipes.length; i += 1) {
      let recipeIsMatching = false;
      if (regex.test(recipes[i].name)) {
        recipeIsMatching = true;
      } else if (regex.test(recipes[i].description)) {
        recipeIsMatching = true;
      }
      for (let j = 0; j < recipes[i].ingredients.length; j += 1) {
        if (regex.test(recipes[i].ingredients[j].ingredient)) {
          recipeIsMatching = true;
        }
      }
      if (recipeIsMatching === true) {
       recipesToDisplay.push(recipes[i]);
      }
    }
    /* Remplir les filtres avec le tableau retourné */
    fillFilters(recipesToDisplay);
    // console.log('mot recherché', mainInput + '');
  }
  
  /* Si l'un de ses tableaux comportent un élément alors un tag est utilisé, applique donc la fonction filteredRecipesWithTags avec comme callback recipesToDisplay;
  Les tableaux sont définis dans tags.js dans la fonction filteredRecipesWithTags. */
  if (Array.from(document.querySelectorAll('.tag__ingredients--wrapper .tag__ingredient .tag-blue')).length > 0
  || Array.from(document.querySelectorAll('.tag__appliances--wrapper .tag__appliance .tag-green')).length > 0
  || Array.from(document.querySelectorAll('.tag__ustensils--wrapper .tag__ustensil .tag-red')).length > 0) {
    tagsUsed = true;
    // console.log('on passe ici');
    if (recipesToDisplay.length > 0) {
      recipesToDisplay = filteredRecipesWithTags(recipesToDisplay);
    } else {
    recipesToDisplay = filteredRecipesWithTags(recipes);
    }
  }

  /** Message erreur dans le cas d'une mauvaise recherche **/
  if (recipesToDisplay.length > 0) {
    noResultText.innerHTML = '';
    displayData(recipesToDisplay);
  } else {
    displayData(recipesToDisplay);
     noResultText.innerHTML = '<p>Aucune recette ne correspond à votre critère...</p>';
  } 

  // Si la barre de recherche est vide ou moins de 3 caractères.
  if (((searchBarInput.value === '') || (searchBarInput.value.length < 3)) && tagsUsed === false) {
    fillFilters(recipes);
    displayData(recipes);
    noResultText.innerHTML = '';
  }
}

/*** EVENTS ***/

let typingTimer;
const typeInterval = 100;
searchBarInput.addEventListener('keyup', () => {
  clearTimeout(typingTimer);
  typingTimer = setTimeout(searchLive(), typeInterval);
});

