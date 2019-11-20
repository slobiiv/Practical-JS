var todos = ['item 1','item 2','item 3'];

function displayTodos() {
  console.log(todos);
}

function addTodos(todo) {
  todos.push(todo);
  displayTodos();
}

function changeTodos(position, newValue) {
  todos[position] = newValue;
  displayTodos();
}

function deleteTodo(position) {
  // todos.splice(0,1); deleting an item
  todos.splice(position, 1);
  displayTodos();
}


addTodos('new item 4');
changeTodos(0,'new item 1');
deleteTodo(0);