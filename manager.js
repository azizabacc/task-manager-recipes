// Import modules
const ts= require('./tasks.js');
let rc= require('./recipes.js');
const fn = require('./functions.js');

const fs = require('fs');
const path = require('path');
const rl = require('readline-sync');

function main() {
    fn.options();
    const option = rl.question(ts.tasks[3]);
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
                //fn.addRecipe(newRecipe,rc.recipes);
                rc.recipes[newRecipe]= {
                    quantity: 12,
                    ingredients: {
                      almondFlour: 200,
                      powderedSugar: 200,
                      eggWhites: 150,
                      granulatedSugar: 50,
                      foodColoring: "as desired"
                    },
                    units: {
                      almondFlour: "g",
                      powderedSugar: "g",
                      eggWhites: "g",
                      granulatedSugar: "g",
                      foodColoring: ""
                    },
                    instructions: [
                      "Sift almond flour and powdered sugar together.",
                      "In a separate bowl, beat egg whites until foamy.",
                      "Gradually add granulated sugar while continuing to beat until stiff peaks form.",
                      "Fold the almond flour mixture into the beaten egg whites.",
                      "Add food coloring and mix until desired color is achieved.",
                      "Pipe small rounds of the mixture onto a baking sheet lined with parchment paper.",
                      "Let the macarons rest for 30 minutes to develop a skin.",
                      "Preheat the oven to 160°C and bake the macarons for about 15 minutes.",
                      "Remove from the oven and let them cool completely before filling and assembling."
                    ]
                  };
                  const recipesFilePath = path.join(__dirname, 'recipes.json');
      fs.writeFileSync(recipesFilePath, JSON.stringify(rc.recipes, null, 2));
      
      console.log(rc.recipes);
         
                break;
    }


}
main();

