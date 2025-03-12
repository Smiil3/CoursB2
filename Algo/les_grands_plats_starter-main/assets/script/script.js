console.log('linked')

class RecipeCard {
    constructor(recipe) {
        this.recipe = recipe;
    }

    createCard() {
        let divCol = document.createElement('div')
        divCol.innerHTML = 
        `<div class="col" id="2">
                <div class="card h-100">
                  <div class="card-img-top"></div>
                  <div class="card-body">
                    <div class="row mb-2">
                      <h2 class="card-title col-8 card-name">${this.recipe.name}</h2>
                      <div class="card-title col-4 text-end card-time-container">
                        <img class="me-1 card-time-watch" alt="" src="./assets/img/watch-time.svg" /><span class="card-time">${this.recipe.time} min</span>
                      </div>
                    </div>
                    <div class="row">
                      <ul class="card-text col-6 list-unstyled card-ingredients-list">
                      </ul>
                      <p class="card-text col-6 card-description">
                        ${this.recipe.description.length > 185 ? this.recipe.description.slice(0, 185) + '...' : this.recipe.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>`
              let ingredientsList = divCol.querySelector('.card-ingredients-list')
            for (let ingredient of this.recipe.ingredients) {
                let li = document.createElement('li')
                li.innerHTML = `
                    <li class="card-ingredients-list-item">
                    <span class="card-ingredients-list-item-ingredient">${ingredient.ingredient}</span>
                    <span class="card-ingredients-list-item-quantity"></span>
                    <span class="card-ingredients-list-item-unit"></span>
                    </li>
                `
                ingredientsList.appendChild(li)
            }
        return divCol
    }
}

class RecipeList {
    constructor(recipes, containerSelector) {
        this.recipes = recipes;
        this.container = document.querySelector(containerSelector);
    }

    render() {
        this.recipes.forEach(recipe => {
            const recipeCard = new RecipeCard(recipe);
            this.container.appendChild(recipeCard.createCard());
        });
    }
}

const recipeList = new RecipeList(recipes, '#recipes-list');
recipeList.render();

const searchInput = document.querySelector('#search');
searchInput.addEventListener('input', (e) => {
    const searchValue = e.target.value;
    const filteredRecipes = recipes.filter(recipe => {
        const recipeName = recipe.name.toLowerCase();
        const recipeDescription = recipe.description.toLowerCase();
        const recipeIngredients = recipe.ingredients.map(ingredient => ingredient.ingredient.toLowerCase()).join(' ');
        return recipeName.includes(searchValue.toLowerCase()) || recipeDescription.includes(searchValue.toLowerCase()) || recipeIngredients.includes(searchValue.toLowerCase());
    });

    const recipesList = document.querySelector('#recipes-list');
    recipesList.innerHTML = '';
    const filteredRecipeList = new RecipeList(filteredRecipes, '#recipes-list');
    filteredRecipeList.render();
});
/*
const checkStringForKeyWords = function(string) {
    let tableOfWords=[]
    let words = string.split(" ")
    for (let i = 0; i< words.length; i++) {
        if (words[i].length > 2 ) {
            tableOfWords.push(words[i])
        }
    }
    return tableOfWords
} 
let uniqueKeywords = new Set()
for (let recipe of recipes) {
    let nameKeyWords = checkStringForKeyWords(recipe.name)
    let descriptionKeyWords = checkStringForKeyWords(recipe.name)
    let total = [...nameKeyWords, ...descriptionKeyWords]
    for (let i = 0; i < total.length; i++) {
        uniqueKeywords.add(total[i])
    }
}
console.log(uniqueKeywords)
//console.log(checkStringForKeyWords("Limonade de Coco"))
*/