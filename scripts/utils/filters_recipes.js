//  function filterIngredients créer et fait apparaitre le filtre Ingrédients.

function filterIngredients() {
  /* getDataJson is defined on index.js */
  // getDataJson();
  
  const ingredientsBox = document.getElementsByClassName('filter__ingredients');
  const template = document.createElement('div');
  template.className = 'filter__ingredients--template';

  const article = document.createElement('div');
  article.className = 'filter__ingredients--close';

  const headerIngredients = document.createElement('header');
  headerIngredients.className = 'filter__ingredients--header'

  const title = document.createElement('h2');
  title.textContent = 'Ingredients';
  title.className = 'filter__ingredients--name';

  const spanAngle = document.createElement('span');
  spanAngle.className = 'filter__ingredients--angleDown';

  const arrowDown = document.createElement('i');
  arrowDown.className = 'fa-solid fa-angle-down fa-lg';
  arrowDown.style.cursor = 'pointer';

  const hiddenAngle = document.createElement('span');
  hiddenAngle.className = 'filter__ingredients--angleUp';

  const arrowUp = document.createElement('i');
  arrowUp.className = 'fa-solid fa-angle-up fa-lg';
  arrowUp.style.cursor = 'pointer';
  arrowUp.style.display = 'none';

  const inputIngredients = document.createElement('input');
  inputIngredients.setAttribute('id', 'ingredients-input');
  inputIngredients.setAttribute('placeholder', 'Sélectionner un ingrédient...');
  inputIngredients.className = 'filter__ingredients--input';

  const ingredientsListed = document.createElement('div');
  ingredientsListed.className = 'filter__ingredients--list';
  ingredientsListed.style.display = 'none';

  /* Ingredients Event */

  // Lors du clique sur ArrowDown 
  arrowDown.addEventListener('click', (e) => {
    if (e.target.className === 'fa-solid fa-angle-down fa-lg') {
      article.classList.remove('filter__ingredients--close');
      article.classList.add('filter__ingredients--view');
      headerIngredients.style.display = 'none';
      inputIngredients.style.display = 'flex';
      arrowDown.style.display = 'none';
      arrowUp.style.display = 'flex';
      template.style.width = '650px';
      ingredientsListed.style.display = 'flex';
    }
  });
  // Lors du clique sur ArrowUp 
  arrowUp.addEventListener('click', (e) => {
    if (e.target.className === 'fa-solid fa-angle-up fa-lg') {
      article.classList.remove('filter__ingredients--view');
      article.classList.add('filter__ingredients--close');
      headerIngredients.style.display = 'flex';
      inputIngredients.style.display = 'none';
      arrowDown.style.display = 'flex';
      arrowUp.style.display = 'none';
      template.style.width = '170px';
      ingredientsListed.style.display = 'none';

    }
  });

  // Append Section 
  ingredientsBox[0].appendChild(template);
  template.appendChild(article);
  article.appendChild(headerIngredients);
  headerIngredients.appendChild(title);
  headerIngredients.appendChild(spanAngle);
  spanAngle.appendChild(arrowDown);
  article.appendChild(hiddenAngle);
  hiddenAngle.appendChild(arrowUp);
  article.appendChild(inputIngredients);
  article.appendChild(ingredientsListed);

  return(article);
}


//  function filterAppliances créer et fait apparaitre le filtre appareils.

function filterAppliances() {
  /* getDataJson is defined on index.js */
  // getDataJson();
  
  const appliancesBox = document.getElementsByClassName('filter__appliances');
  const template = document.createElement('div');
  template.className = 'filter__appliances--template';

  const article = document.createElement('div');
  article.className = 'filter__appliances--close';

  const headerAppliances = document.createElement('header');
  headerAppliances.className = 'filter__appliances--header'

  const title = document.createElement('h2');
  title.textContent = 'Appareils';
  title.className = 'filter__appliances--name';

  const spanAngle = document.createElement('span');
  spanAngle.className = 'filter__appliances--angleDown';

  const arrowDown = document.createElement('i');
  arrowDown.className = 'fa-solid fa-angle-down fa-lg';
  arrowDown.style.cursor = 'pointer';

  const hiddenAngle = document.createElement('span');
  hiddenAngle.className = 'filter__appliances--angleUp';

  const arrowUp = document.createElement('i');
  arrowUp.className = 'fa-solid fa-angle-up fa-lg';
  arrowUp.style.cursor = 'pointer';
  arrowUp.style.display = 'none';

  const inputAppliances = document.createElement('input');
  inputAppliances.setAttribute('id', 'appliances-input');
  inputAppliances.setAttribute('placeholder', 'Sélectionner un appareil...');
  inputAppliances.className = 'filter__appliances--input';

  const appliancesListed = document.createElement('div');
  appliancesListed.className = 'filter__appliances--list';
  appliancesListed.style.display = 'none';

  /* Appliances Event */

  // Lors du clique sur ArrowDown 
  arrowDown.addEventListener('click', (e) => {
    if (e.target.className === 'fa-solid fa-angle-down fa-lg') {
      article.classList.remove('filter__appliances--close');
      article.classList.add('filter__appliances--view');
      headerAppliances.style.display = 'none';
      inputAppliances.style.display = 'flex';
      arrowDown.style.display = 'none';
      arrowUp.style.display = 'flex';
      template.style.width = '650px';
      appliancesListed.style.display = 'flex';
    }
  });

  // Lors du clique sur ArrowUp 
  arrowUp.addEventListener('click', (e) => {
    if (e.target.className === 'fa-solid fa-angle-up fa-lg') {
      article.classList.remove('filter__appliances--view');
      article.classList.add('filter__appliances--close');
      headerAppliances.style.display = 'flex';
      inputAppliances.style.display = 'none';
      arrowDown.style.display = 'flex';
      arrowUp.style.display = 'none';
      template.style.width = '170px';
      appliancesListed.style.display = 'none';
    }
  });

  // Append Section 
  appliancesBox[0].appendChild(template);
  template.appendChild(article);
  article.appendChild(headerAppliances);
  headerAppliances.appendChild(title);
  headerAppliances.appendChild(spanAngle);
  spanAngle.appendChild(arrowDown);
  article.appendChild(hiddenAngle);
  hiddenAngle.appendChild(arrowUp);
  article.appendChild(inputAppliances);
  article.appendChild(appliancesListed);

  return(article);
}

//  function filterUstensils créer et fait apparaitre le filtre ustensils.

function filterUstensils() {
  /* getDataJson is defined on index.js */
  // getDataJson();
  
  const ustensilsBox = document.getElementsByClassName('filter__ustensils');
  const template = document.createElement('div');
  template.className = 'filter__ustensils--template';

  const article = document.createElement('div');
  article.className = 'filter__ustensils--close';

  const headerUstensils = document.createElement('header');
  headerUstensils.className = 'filter__ustensils--header'

  const title = document.createElement('h2');
  title.textContent = 'Ustensils';
  title.className = 'filter__ustensils--name';

  const spanAngle = document.createElement('span');
  spanAngle.className = 'filter__ustensils--angleDown';

  const arrowDown = document.createElement('i');
  arrowDown.className = 'fa-solid fa-angle-down fa-lg';
  arrowDown.style.cursor = 'pointer';

  const hiddenAngle = document.createElement('span');
  hiddenAngle.className = 'filter__ustensils--angleUp';

  const arrowUp = document.createElement('i');
  arrowUp.className = 'fa-solid fa-angle-up fa-lg';
  arrowUp.style.cursor = 'pointer';
  arrowUp.style.display = 'none';

  const inputUstensils = document.createElement('input');
  inputUstensils.setAttribute('id', 'ustensils-input');
  inputUstensils.setAttribute('placeholder', 'Sélectionner un ustensil...');
  inputUstensils.className = 'filter__ustensils--input';

  const ustensilsListed = document.createElement('div');
  ustensilsListed.className = 'filter__appliances--list';
  ustensilsListed.style.display = 'none';

  // Lors du clique sur ArrowDown 
  arrowDown.addEventListener('click', (e) => {
    if (e.target.className === 'fa-solid fa-angle-down fa-lg') {
      article.classList.remove('filter__ustensils--close');
      article.classList.add('filter__ustensils--view');
      headerUstensils.style.display = 'none';
      inputUstensils.style.display = 'flex';
      arrowDown.style.display = 'none';
      arrowUp.style.display = 'flex';
      template.style.width = '650px';
      ustensilsListed.style.display = 'flex';
    }
  });

  // Lors du clique sur ArrowUp 
  arrowUp.addEventListener('click', (e) => {
    if (e.target.className === 'fa-solid fa-angle-up fa-lg') {
      article.classList.remove('filter__ustensils--view');
      article.classList.add('filter__ustensils--close');
      headerUstensils.style.display = 'flex';
      inputUstensils.style.display = 'none';
      arrowDown.style.display = 'flex';
      arrowUp.style.display = 'none';
      template.style.width = '170px';
      ustensilsListed.style.display = 'none';
    }
  });

  // Append Section 
  ustensilsBox[0].appendChild(template);
  template.appendChild(article);
  article.appendChild(headerUstensils);
  headerUstensils.appendChild(title);
  headerUstensils.appendChild(spanAngle);
  spanAngle.appendChild(arrowDown);
  article.appendChild(hiddenAngle);
  hiddenAngle.appendChild(arrowUp);
  article.appendChild(inputUstensils);
  article.appendChild(ustensilsListed);

  return(article);
}


async function getDataRecipes() {
  const response = await fetch('data/recipes.json');
  return await response.json();
  
}

/* Initialisation des fonctions des filtres de manière asynchrone.
*/ 

async function init() {
  filterIngredients();
  filterAppliances();
  filterUstensils();

  const { recipes } = await getDataRecipes();
}

init();

