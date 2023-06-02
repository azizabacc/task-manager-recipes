const task1 = "Which recipe would you like to do?";
const task2 ="Would you like to have the list of ingredients ? ";
const task3 ="For how many persons would you like to prepare it ?";
let tasks = [task1,task2,task3];
function addTask(task) {
    tasks.push(task);
  }
  
  function removeTask(index) {
    tasks.splice(index, 1);
  }
module.exports = { tasks ,addTask, removeTask };