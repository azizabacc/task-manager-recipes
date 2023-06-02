// Import modules
const ts= require('./tasks.js');
const rc= require('./recipes.js');
const fn = require('./functions.js');

const rl = require('readline-sync');

function main() {
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
}
main();

