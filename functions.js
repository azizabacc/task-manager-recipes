const { recipes } = require("./recipes");

// display recipes names
  function displayRecipeNames(recipes) {
    Object.keys(recipes).forEach((recipeName, index) => {
      console.log(`${index + 1}. ${recipeName}`);
    });
  };
// check if the given recipe exists
  function checkRecipeExists(recipeName, recipes) {
    return recipeName in recipes;
  }

//display the recipe's ingredients
function displayRecipeIngredients(recipeName, recipes) {
    if (recipeName in recipes) {
      const ingredients = recipes[recipeName].ingredients;
      const units = recipes[recipeName].units;
      console.log(`Ingredients for ${recipeName}:`);
      for (let ingredient in ingredients) {
        console.log(`${ingredient}: ${ingredients[ingredient]} ${units[ingredient]}`);
      }
    } else {
      console.log(`Recipe '${recipeName}' does not exist.`);
    }
  }
  // display for how many persons the recipe is done
  function displayQuantity(recipeName, recipes) {
    if (recipeName in recipes) {
      const recipe = recipes[recipeName];
      console.log(`This recipe is for ${recipe.quantity} persons.`);
    } else {
      console.log(`Recipe '${recipeName}' does not exist.`);
    }
  }
// display instruction 
function displayRecipeInstructions(recipeName, recipes) {
    if (recipeName in recipes) {
      const instructions = recipes[recipeName].instructions;
      console.log(`Instructions for ${recipeName}:`);
      for (let instuction in instructions) {
        console.log(`${instructions[instuction]}`);
      }
    } else {
      console.log(`Recipe '${recipeName}' does not exist.`);
    }
  }
  //calculate  ingredient quantities
  function ingredientQuantities(recipeName, response){
    if (recipeName in recipes) {
        const ingredients = recipes[recipeName].ingredients;
        let newIngredients = {};
    console.log(ingredients);
    for (let ingredient in ingredients) {
      newIngredients[ingredient] = ingredients[ingredient] * 10 / 6;
    }
    return newIngredients;
  }

}



  function checkQuantity(recipeName, response) {
    if (recipeName in recipes) {
      const quantity = recipes[recipeName].quantity;
      if (response == quantity) {
        displayRecipeInstructions(recipeName, recipes);
        // Ajoutez ici la logique pour afficher les instructions
      }else{
        console.log(ingredientQuantities(recipeName, response));
      }
    } else {
      console.log(`Recipe '${recipeNameArg}' does not exist.`);
    }
  }
  
  
  
  

  
  
  
  
  
  

  
  
  
  
  
  
module.exports = { displayRecipeNames, checkRecipeExists, displayRecipeIngredients, 
    displayQuantity, checkQuantity};