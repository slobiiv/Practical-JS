var todoList = {
  todos: [
    // (example)
    // 0. todoText: 'Do this until you get it!',
    // completed: false
  ],
  displayTodos: function() {
    console.log('My todos: ', this.todos);
  },
  addTodos: function(todoText) {
    // todoList should add Objects - todoList.addTodos('Change diapers');
    this.todos.push (
      {
      todoText: todoText,
      completed: false // we want to know if the task is completed or not
    }
    );
    this.displayTodos();
  },
  changeTodo: function(position, todoText) {
    this.todos[position] = todoText; 
    this.displayTodos();
  },
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
    this.displayTodos();
  }
}

// We want to represent more DATA, that's why we are using Objects