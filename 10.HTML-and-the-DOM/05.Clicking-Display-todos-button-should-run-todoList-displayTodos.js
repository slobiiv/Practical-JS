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


// Clicking display todos should run totoList.displayTodos
  // 1. We want to get access to the display todos button
var displayTodosButton = document.getElementById('displayTodosButton');
  // 2. We want to run displayTodos method, when someone clicks the display todos button
displayTodosButton.addEventListener('click', function() {
  todoList.displayTodos();
});