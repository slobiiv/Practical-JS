var todoList = {
  todos: [],
  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
  },
  changeTodo: function(position, todoText) {
    this.todos[position].todoText = todoText; 
  },
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
  },
  toggleCompleted: function(position) {
    var todo = this.todos[position];
    todo.completed = !todo.completed;  // if false change to true, and opposite (!)
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
  }
};



var handlers = {
  addTodo: function(){
    var addTodoTextInput = document.getElementById('addTodoTextInput');
    todoList.addTodo(addTodoTextInput.value);
    addTodoTextInput.value = ''; // delete the text input
    view.displayTodos();
  },
  changeTodo: function() {
    var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
    var changeTodoTextInput = document.getElementById('changeTodoTextInput');
    todoList.changeTodo(changeTodoPositionInput.valueAsNumber,changeTodoTextInput.value); // valueAsNumber, because value uses string
    changeTodoPositionInput.value = '';
    changeTodoTextInput.value = '';
    view.displayTodos();
  },
  deleteTodo: function() {
    var deleteTodoPositionInput = document.getElementById('deleteTodoPositionInput');
    todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
    deleteTodoPositionInput.value = '';
    view.displayTodos();
  },
  toggleCompleted: function() {
    var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
    todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
    toggleCompletedPositionInput.value = '';
    view.displayTodos();
  },
  toggleAll : function() {
    todoList.toggleAll();
    view.displayTodos();
  }
};

/* 
1.)There should be a li element for every todo
2.)Each li element should contain .todoText
3.)Each li element should show .completed 
*/

// view - taking todos array and displays to screen
var view = {
  displayTodos: function() {
    var todosUl = document.querySelector('ul');
    todosUl.innerHTML = '';
    // 1.)There should be a li element for every todo:
    // This loop is adding a new <li> element depending on the array length
    for(var i = 0; i < todoList.todos.length; i++) {
      var todoLi = document.createElement('li');
      var todo = todoList.todos[i]
      // 3.)Each li element should show .completed 
      var todoTextWithCompletion = '';
      if(todo.completed === true) {
        todoTextWithCompletion = '( x )' + ' ' + todo.todoText;
      } else {
        todoTextWithCompletion = '(   )' + ' ' + todo.todoText;
      }
      // 2.)Each li element should contain .todoText and Each li element should show .completed 
      todoLi.textContent = todoTextWithCompletion;
      todosUl.appendChild(todoLi);
      
    }
  }
}