angular.module('todoApp').controller('ListController', function($state, localStorageService, $stateParams) {

    this.getTodo = function() {
        return localStorageService.get('localStorageTodo') || [];
    };

    this.setTodo = function(todoArray) {
        localStorageService.set('localStorageTodo', todoArray);
    };

    this.removeTodo = function(todo) {
        return localStorageService.remove('localStorageTodo', todo);
    };

    this.todoItems = this.getTodo();

    this.findTodoById = function(todoArray, id) {
        var todoToReturn;
        todoArray.forEach(function(item) {
            if (item.id === id) {
                todoToReturn = item;
            }
        });
        return todoToReturn;
    };

    this.toggleChecked = function(item) {
        item.checked = !item.checked;
        var todoArray = this.getTodo();
        var todoToUpdate = this.findTodoById(todoArray, item.id);
        angular.copy(item, todoToUpdate);
        this.setTodo(todoArray);
    };

this.listFilter = $stateParams.filter || 'all';
this.filtersObj = {
        all: {},
        completed: {
            checked: true
        },
        active: {
            checked: false
        }
    };

    this.delete = function(item) {
      var todoArray = this.getTodo();
      var todoToDelete = this.findTodoById(todoArray, item.id);
      var index = todoArray.indexOf(todoToDelete);
      if (index > -1) {
        todoArray.splice(index, 1);
      }
      this.setTodo(todoArray);
      $state.reload('todoParent.todos');
    };

});
