var todos = ['new item 1','new item 2', 'new item 3'];

function displayTodos() {
  console.log(todos);
}

function addTodos(todo) {
  todos.push(todo);
  displayTodos();
}
function changeTodos(position, newValue) {
  todos[position] = newValue;
  // todos[0] = 'wake up early';
  displayTodos();
}


addTodos('sleep well');
changeTodos(0, 'wake up early');