// Import modules
const ts= require('./tasks.js');
let rc= require('./recipes.js');
const fn = require('./functions.js');

const fs = require('fs');
const path = require('path');
const rl = require('readline-sync');


function main() {
    fn.options();
    const option = rl.question("");
    switch(option){
        case "1":
            fn.displayRecipeNames(rc.recipes);
            const recipeName = rl.question(ts.tasks[0]);
          
            if (recipeName in rc.recipes) {
              const recipe = rc.recipes[recipeName];
              //console.log(recipe);
              const answer =rl.question(ts.tasks[1]);
              if(answer=='yes'){
                  fn.displayRecipeIngredients(recipeName, rc.recipes); 
                  fn.displayQuantity(recipeName, rc.recipes);
                  const quantity=rl.question(ts.tasks[2]);
                  fn.checkQuantity(recipeName,quantity);
              }else{
          main();
              }
          
            } else {
              main();
            }
            break;
            case "2":
                const newRecipe = rl.question(ts.tasks[4]);
                const recQuantity = parseInt(rl.question(ts.tasks[5]));
                const ingredients = rc.recipes["waffles"].ingredients;
                const newIngredients = [];
          
                for (ingr in ingredients) {
                  let ingredientQuantity = parseInt(rl.question(`Enter the quantity of ${ingr} : `), 10);
                  newIngredients.push( ingredientQuantity);
                }
                const recInstructions = rl.question(ts.tasks[6]);
                //fn.addRecipe(newRecipe,rc.recipes);
                rc.recipes[newRecipe]= {
                    quantity: recQuantity,
                    ingredients: {
                        flour: newIngredients[0],
                        sugar: newIngredients[1],
                        eggs: newIngredients[2],
                        milk: newIngredients[3],
                        butter: newIngredients[4],
                        yeast: newIngredients[5]
                    },
                    units: {
                        flour: "g",
                        sugar: "g",
                        eggs: "unit",
                        milk: "ml",
                        butter: "g",
                        yeast: "g"
                    },
                    instructions: [
                      recInstructions
                    ]
                  };
                  const recipesFilePath = path.join(__dirname, 'recipes.json');
      fs.writeFileSync(recipesFilePath, JSON.stringify(rc.recipes, null, 2));
      
      console.log(rc.recipes);
         
                break;
    }
    main();


}
main();

