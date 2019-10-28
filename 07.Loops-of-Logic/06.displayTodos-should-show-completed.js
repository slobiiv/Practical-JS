var todoList = {
  todos: [],
  displayTodos: function() {
    if(this.todos.length === 0 ) {
      console.log('Your Todo list is empty')
    } else {
      console.log('My Todos: ');
      for(var i = 0; i < this.todos.length;i++) {
        if(this.todos[i].completed) { // if a specific object is completed (true)
          console.log('(x)', this.todos[i].todoText);
        } else {
          console.log('( )', this.todos[i].todoText); // or false
        }
      }
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
