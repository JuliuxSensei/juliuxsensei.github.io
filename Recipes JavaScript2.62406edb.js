// Obtención de elementos del DOM
const searchField = document.querySelector('.search__field');
const searchBtn = document.querySelector('.search__btn');
const resultsContainer = document.querySelector('.results');
const recipeContainer = document.querySelector('.recipe');
const overlay = document.querySelector('.overlay');
const addRecipeBtn = document.querySelector('.nav__btn--add-recipe');
const closeModalBtn = document.querySelector('.btn--close-modal');
const addRecipeWindow = document.querySelector('.add-recipe-window');
// Datos simulados de recetas para probar (puedes integrarlos con una API real)
const recipes = [
    {
        id: '5ed6604591c37cdc054bc886',
        title: 'Pasta with Tomato Cream',
        image: 'src/img/test-1.jpg',
        cookTime: 45,
        servings: 4,
        publisher: 'The Pioneer Woman',
        ingredients: [
            {
                quantity: '1000',
                unit: 'g',
                description: 'pasta'
            },
            {
                quantity: '0.5',
                unit: 'cup',
                description: 'ricotta cheese'
            }
        ],
        sourceUrl: 'http://thepioneerwoman.com/cooking/pasta-with-tomato-cream-sauce/'
    },
    {
        id: '5ed6604591c37cdc054bc887',
        title: 'Chicken Salad',
        image: 'src/img/test-2.jpg',
        cookTime: 30,
        servings: 2,
        publisher: 'Jamie Oliver',
        ingredients: [
            {
                quantity: '500',
                unit: 'g',
                description: 'chicken breast'
            },
            {
                quantity: '1',
                unit: 'cup',
                description: 'lettuce'
            }
        ],
        sourceUrl: 'http://jamieoliver.com/cooking/chicken-salad'
    }
];
// Función para mostrar los resultados de la búsqueda
const displayResults = (query)=>{
    const filteredRecipes = recipes.filter((recipe)=>recipe.title.toLowerCase().includes(query.toLowerCase()));
    resultsContainer.innerHTML = ''; // Limpiar resultados anteriores
    filteredRecipes.forEach((recipe)=>{
        const resultItem = document.createElement('a');
        resultItem.href = `#${recipe.id}`;
        resultItem.textContent = recipe.title;
        resultItem.classList.add('result-item');
        resultsContainer.appendChild(resultItem);
    });
};
// Función para mostrar una receta seleccionada
const displayRecipe = (id)=>{
    const recipe = recipes.find((recipe)=>recipe.id === id);
    if (!recipe) return;
    // Mostrar los detalles de la receta
    recipeContainer.innerHTML = `
    <figure class="recipe__fig">
      <img src="${recipe.image}" alt="${recipe.title}" class="recipe__img" />
      <h1 class="recipe__title">
        <span>${recipe.title}</span>
      </h1>
    </figure>

    <div class="recipe__details">
      <div class="recipe__info">
        <svg class="recipe__info-icon">
          <use href="src/img/icons.svg#icon-clock"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--minutes">${recipe.cookTime}</span>
        <span class="recipe__info-text">minutes</span>
      </div>
      <div class="recipe__info">
        <svg class="recipe__info-icon">
          <use href="src/img/icons.svg#icon-users"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--people">${recipe.servings}</span>
        <span class="recipe__info-text">servings</span>
      </div>
    </div>

    <div class="recipe__ingredients">
      <h2 class="heading--2">Recipe ingredients</h2>
      <ul class="recipe__ingredient-list">
        ${recipe.ingredients.map((ing)=>`
            <li class="recipe__ingredient">
              <svg class="recipe__icon">
                <use href="src/img/icons.svg#icon-check"></use>
              </svg>
              <div class="recipe__quantity">${ing.quantity}</div>
              <div class="recipe__description">
                <span class="recipe__unit">${ing.unit}</span>
                ${ing.description}
              </div>
            </li>
          `).join('')}
      </ul>
    </div>

    <div class="recipe__directions">
      <h2 class="heading--2">How to cook it</h2>
      <p class="recipe__directions-text">
        This recipe was carefully designed and tested by
        <span class="recipe__publisher">${recipe.publisher}</span>. Please check out
        directions at their website.
      </p>
      <a
        class="btn--small recipe__btn"
        href="${recipe.sourceUrl}"
        target="_blank"
      >
        <span>Directions</span>
        <svg class="search__icon">
          <use href="src/img/icons.svg#icon-arrow-right"></use>
        </svg>
      </a>
    </div>
  `;
};
// Evento para buscar recetas
searchBtn.addEventListener('click', (event)=>{
    event.preventDefault();
    const query = searchField.value.trim();
    displayResults(query);
});
// Mostrar receta al hacer clic en el enlace
window.addEventListener('hashchange', ()=>{
    const id = window.location.hash.slice(1); // Obtener id desde la URL
    displayRecipe(id);
});
// Abrir ventana de agregar receta
addRecipeBtn.addEventListener('click', ()=>{
    addRecipeWindow.classList.remove('hidden');
    overlay.classList.remove('hidden');
});
// Cerrar ventana de agregar receta
closeModalBtn.addEventListener('click', ()=>{
    addRecipeWindow.classList.add('hidden');
    overlay.classList.add('hidden');
});
// Inicialización: Mostrar receta si hay una en la URL al cargar la página
document.addEventListener('DOMContentLoaded', ()=>{
    const id = window.location.hash.slice(1);
    if (id) displayRecipe(id);
});

//# sourceMappingURL=Recipes JavaScript2.62406edb.js.map
