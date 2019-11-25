var todoList = {
  todos: [],
  displayTodos: function() {
    console.log('My Todos: ');
    // displayTodos should show .todoText 
    for(var i = 0; i < this.todos.length;i++) {
      console.log('My todos: ', this.todos[i].todoText);
    }
  },
  addTodos: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
    this.displayTodos();
  },
  changeTodo: function(position, todoText) {
    this.todos[position].todoText = todoText; 
    this.displayTodos();
  },
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
    this.displayTodos();
  },
  toggleCompleted: function(position) {
    var todo = this.todos[position];
    todo.completed = !todo.completed;  // if false change to true, and opposite (!)
    this.displayTodos();
  }
}
