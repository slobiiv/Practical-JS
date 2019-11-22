var todos = ['item 1','item 2','item 3'];

// It should have a function to DISPLAY Todos
function displayTodos() {
  console.log(todos);
}

// It should have a function to ADD Todos
function addTodos(todo) {
  todos.push(todo);
  displayTodos();
}
// It should have a function to CHNAGE Todos
function changeTodos(position, newValue) {
  todos[position] = newValue;
  displayTodos();
}
// It should have a function to DELETE Todos
function deleteTodo(position) {
  todos.splice(position, 1);
  // todos.splice(0,1); deleting an item
  displayTodos();
}


addTodos('new item 4');
changeTodos(0,'new item 1');
deleteTodo(0);