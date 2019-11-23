var todoList = {
  todos: ['item 1','item 2', 'item 3'],
  // It should have a display Todos method 
  displayTodos: function() {
    console.log('My todos: ', this.todos);
  }
}
// todoList.displayTodos() =  My todos : ["item 1", "item 2", "item 3"]