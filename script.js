// Code goes here

var todoList = {
  todos: [],
  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
  },
  
  changeTodo: function(position, newTodoText) {
    this.todos[position].todoText = newTodoText;
  },
  
  removeItemFromTodo: function(position) {
    this.todos.splice(position, 1);
  },
  
  toggleCompleted: function(position) {
    var todo = this.todos[position];
    todo.completed = !todo.completed;
  },
  
  toggleAll: function() {
    var totalTodos = this.todos.length;
    var countTrue = 0;
    //COUNTER OF COMPLITED TODOS
    // for (var i = 0; i < totalTodos; i++) {
    //   if (this.todos[i].completed === true) {
    //     countTrue++;
    //   }
    // }
    this.todos.forEach( function(object){
      if(object.completed === true){
        countTrue++;
      }
    });
    //if all are false swich all to true
    if (countTrue === totalTodos) {
      // for (var i = 0; i < this.todos.length; i++) {
      //   this.todos[i].completed = false;
      // }
      this.todos.forEach(function(object){
        object.completed = false;
        });
        
    } else {
      // for (var i = 0; i < totalTodos; i++) {
      //   this.todos[i].completed = true;
      // }
      this.todos.forEach(function(object){
        object.completed = true;
        });
    }
  }
  
};


var handlers = {
  
  toggleAll: function() {
    todoList.toggleAll();
    view.displayTodos();
  },
  
  addTodo: function() {
    var addTodoTextInput = document.getElementById('addTodoTextInput');
    todoList.addTodo(addTodoTextInput.value);
    addTodoTextInput.value = "";
    view.displayTodos();
  },
  
  changeTodo: function() {
    var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
    var changeTodoTextInput = document.getElementById('changeTodoTextInput');
    
    todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
    changeTodoPositionInput.value = '';
    changeTodoTextInput.value = '';
    view.displayTodos();
  },
  
  deleteTodo: function() {
    var deleteTodoPositionInput = document.getElementById('deleteTodoPositionInput');
    todoList.removeItemFromTodo(deleteTodoPositionInput.valueAsNumber);
    deleteTodoPositionInput.value = '';
    view.displayTodos();
  },
  
  toggleCompleted: function() {
    var toggleCompletedInput = document.getElementById('toggleCompletedInput');
    todoList.toggleCompleted(toggleCompletedInput.valueAsNumber);
    toggleCompletedInput.value = '';
    view.displayTodos();
  }
  
};

var view = {
  displayTodos: function() {
  
  var todosUl = document.querySelector('ul');
  todosUl.innerHTML = '';
  
  for(var i = 0; i < todoList.todos.length; i++){
    var todoLi = document.createElement('li');
    var todo = todoList.todos[i];
    var todoTextWithCompletion = '';
    if(todo.completed === true){
      todoTextWithCompletion = '(X) ' + todo.todoText;
    } else {
      todoTextWithCompletion = '( ) ' + todo.todoText;
    }
    
    todoLi.textContent = todoTextWithCompletion;
    
    todosUl.appendChild(todoLi);
    }
  }
};

