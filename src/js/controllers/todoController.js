angular.module('todoApp').controller('TodoController', function($state, localStorageService) {
  this.message = "hi";
  this.todoArray = [];

  this.setTodo = function(todoArray) {
    localStorageService.set('localStorageTodo', todoArray );
  };

  this.getTodo = function() {
    return localStorageService.get('localStorageTodo') || [];
  };

  this.createTodo = function(todo) {
    this.todoArray = this.getTodo();

    this.todoArray.push({
      id: Date.now(),
      checked: false,
      body: todo
    });

    this.setTodo(this.todoArray);

    $state.go('todoParent.todos');
  };

});
