const { recipes } = require("./recipes");
const c = require('./colors.js')
//display options 
function options(){
    console.log(c.backgroundColorGreen + c.colorRed +"Choose your option. tip 1 or 2 :"+c.reset)
    console.log(c.colorYellow+"1. Check existing recipes.");
    console.log("2. add recipes."+c.reset);
   

}
// display recipes names
  function displayRecipeNames(recipes) {
    console.log(c.backgroundColorGreen + c.colorRed +"LISTE OF RECIPES :"+c.reset)
    Object.keys(recipes).forEach((recipeName, index) => {
      console.log(c.colorYellow+`${index + 1}.${recipeName}`+c.reset);
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
        console.log(c.backgroundColorYellow+c.colorBlue+`${ingredient}:`+c.backgroundColorReset+c.colorYellow+` ${ingredients[ingredient]} ${units[ingredient]}`+c.reset);
      }
    } else {
      console.log(c.backgroundColorRed+`Recipe '${recipeName}' does not exist.`+c.reset);
    }
  }
  // display for how many persons the recipe is done
  function displayQuantity(recipeName, recipes) {
    if (recipeName in recipes) {
      const recipe = recipes[recipeName];
      console.log(`This recipe is for `+c.colorRed+`${recipe.quantity} persons.`+c.colorReset);
    } else {
      console.log(c.backgroundColorRed+`Recipe '${recipeName}' does not exist.`+c.reset);
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
    for (let ingredient in ingredients) {
      newIngredients[ingredient] = ingredients[ingredient] * 10 / 6;
    }
    return newIngredients;
  }

}
//display the recaculated recipe's ingredients
function displayRecalRecipeIngredients(recipeName, recipes, response) {
    if (recipeName in recipes) {
      const ingredients = ingredientQuantities(recipeName,response)
      const units = recipes[recipeName].units;
      console.log(`Ingredients for ${recipeName}:`);
      for (let ingredient in ingredients) {
        console.log(`${ingredient}: ${ingredients[ingredient]} ${units[ingredient]}`);
      }
    } else {
      console.log(`Recipe '${recipeName}' does not exist.`);
    }
  }


  function checkQuantity(recipeName, response) {
    if (recipeName in recipes) {
      const quantity = recipes[recipeName].quantity;
      if (response == quantity) {
        displayRecipeIngredients(recipeName, recipes)
        displayRecipeInstructions(recipeName, recipes);
        // Ajoutez ici la logique pour afficher les instructions
      }else{
        displayRecalRecipeIngredients(recipeName, recipes, response) ;
        displayRecipeInstructions(recipeName, recipes);

      }
    } else {
      console.log(`Recipe '${recipeName}' does not exist.`);
    }
  }
//----------------------------------------------------------------------------------//

  
  
  

  
  
  
  
  
  

  
  
  
  
  
  
module.exports = {options, displayRecipeNames, checkRecipeExists, displayRecipeIngredients, 
    displayQuantity, checkQuantity};