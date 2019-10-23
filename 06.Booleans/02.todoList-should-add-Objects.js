var todoList = {
  todos: [],
  displayTodos: function() {
    console.log('My todos: ', this.todos);
  },
  addTodos: function(todoText) {
    this.todos.push({
      todoText: todoText, // first todoText is a name of the property, and second todoText will be a value added through parameter
      completed: false
    });
    this.displayTodos();
  },
  changeTodo: function(newValue) {
    this.todos[position] = newValue; 
    this.displayTodos();
  },
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
    this.displayTodos();
  }
}
