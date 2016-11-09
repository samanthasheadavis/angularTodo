angular.module('todoApp').controller('TodoController', function($state, StorageService) {
  this.message = "hi";
  this.todoArray = [];

  this.createTodo = function(todo) {
    this.todoArray = StorageService.get();

    this.todoArray.push({
      id: Date.now(),
      checked: false,
      body: todo
    });

    StorageService.set(this.todoArray);

    $state.go('todoParent.todos');
  };
});
