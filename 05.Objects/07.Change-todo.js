var todoList = {
  todos: ['item 1','item 2', 'item 3'],
  displayTodos: function() {
    console.log('My todos: ', this.todos);
  },
  addTodos: function(todo) {
    this.todos.push(todo);
    this.displayTodos();
  },
  //It should have a changeTodo method
  changeTodo: function(position,newValue) {
    this.todos[position] = newValue; 
    this.displayTodos();
  }
}