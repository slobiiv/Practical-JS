var todoList = {
  todos: [],
  displayTodos: function() {
    if(this.todos.length === 0 ) {
      console.log('Your Todo list is empty');
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
  addTodo: function(todoText) {
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
  },
  /* Poenta toggleAll je da pozivom ove funkcije, sve neodradjene zadatke, oznacimo da su odradjeni i obrnuto.
      - prvo - radi lakseg koriscenja, stavljamo duzinu array u variablu.    
      - drugo - moramo imati varijablu koja prati broj odradjenih zadataka(completedTodos)
      - trece- u petlji koja izlistava sve zadatke u nizu, proveravamo da li su 'true'.
        ako jesu, dodajemo 1+ na (completedTodos) koji cemo 
      - cetvrto - izjednaciti sa (allTodos) da bi dostigli zeljeni ishod. Da svaki od zadataka koji je odradjen, bude
        neodradjen(case 1) i obrnuto (case 2).
  */
  toggleAll: function() {
    var allTodos = this.todos.length;
    completedTodos = 0;
    for(var i = 0; i < allTodos; i++) { 
      if(this.todos[i].completed === true) {
        completedTodos++; 
      }
    }
    // Case 1: if everything is true, make everything false
      if(completedTodos === allTodos) {
        for(var i = 0; i < allTodos; i++) {
          this.todos[i].completed = false;
        }
      }
      // Case 2: Else ,if everything is false, make everything true
      else {
        for(var i = 0; i < allTodos; i++) {
          this.todos[i].completed = true;
        } 
      }
      this.displayTodos();
  }
};



var handlers = {
  displayTodos: function() {
    todoList.displayTodos();
  },
  addTodo: function(){
    var addTodoTextInput = document.getElementById('addTodoTextInput');
    todoList.addTodo(addTodoTextInput.value);
    addTodoTextInput.value = ''; // delete the text input
  },
  changeTodo: function() {
    var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
    var changeTodoTextInput = document.getElementById('changeTodoTextInput');
    todoList.changeTodo(changeTodoPositionInput.valueAsNumber,changeTodoTextInput.value); // valueAsNumber, because value uses string
    changeTodoPositionInput.value = '';
    changeTodoTextInput.value = '';
  },
  deleteTodo: function() {
    var deleteTodoPositionInput = document.getElementById('deleteTodoPositionInput');
    todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
    deleteTodoPositionInput.value = '';
  },
  toggleCompleted: function() {
    var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
    todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
    toggleCompletedPositionInput.value = '';
  },
  toggleAll : function() {
    todoList.toggleAll();
  }
};
/*  same as the code above:
var displayTodosButton = document.getElementById('displayTodosButton');
displayTodosButton.addEventListener('click', function() {
todoList.displayTodos();
});
var toggleAllButton = document.getElementById('toggleAllButton');
toggleAllButton.addEventListener('click', function() {
  todoList.toggleAll();
});
*/