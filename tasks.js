const task1 = "Which recipe would you like to do?";
const task2 ="Would you like to have the list of ingredients ? ";
const task3 ="For how many persons would you like to prepare it ?";
const task4 ="Choose your option. tip 1 or 2."
const task5 ="Tip the recipes Name : "
let tasks = [task1,task2,task3,task4,task5];
function addTask(task) {
    tasks.push(task);
  }
  
  function removeTask(index) {
    tasks.splice(index, 1);
  }
module.exports = { tasks ,addTask, removeTask };