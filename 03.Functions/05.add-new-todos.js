
var todos = ['item 1','item 2', 'item 3'];


function displayTodos() {
  console.log('My todos:', todos);
}
displayTodos(); // My todos:["item 1", "item 2", "item 3"]


function addTodos(todo) {
  todos.push(todo);
  displayTodos(); // using a function inside a function
}
addTodos('new item 4'); // My todos:["item 1", "item 2", "item 3", "new item 4"]
addTodos('new item 5'); // My todos:["item 1", "item 2", "item 3", "new item 4", "new item 5"]