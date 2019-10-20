var todos = ['item 1', 'item 2', 'item 3'];

// It should have a function to display todos
function displayTodos() {
    console.log('My todos: ', todos);
}
// It should have a function to add todos
function addTodos(todo) {
    todos.push(todo);
    displayTodos();
}
addTodos('item 4');

// It should have a function to change todos
function changeTodos(position, newValue) {
    todos[position] = newValue;
    displayTodos();
}
changeTodos(0, 'item 1 updated');
    
// It should have a function to delete todos
function deleteTodo(position) {
    todos.splice(position, 1);
    displayTodos();
}
deleteTodo(1);