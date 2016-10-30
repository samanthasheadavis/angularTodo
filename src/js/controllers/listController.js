angular.module('todoApp').controller('ListController', function(localStorageService) {

  this.getTodo = function() {
    return localStorageService.get('localStorageTodo') || [];
  };

  this.message = 'in listController';
  this.todoItems = this.getTodo();
  
});
