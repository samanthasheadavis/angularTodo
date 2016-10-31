angular.module('todoApp').controller('ListController', function($state, localStorageService, StorageService, $stateParams) {

            this.removeTodo = function(todo) {
                return localStorageService.remove('localStorageTodo', todo);
            };

            this.todoItems = StorageService.get();

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
                var todoArray = StorageService.get();
                var todoToUpdate = this.findTodoById(todoArray, item.id);
                angular.copy(item, todoToUpdate);
                StorageService.set(todoArray);
                this.countItems(todoArray);
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
                var todoArray = StorageService.get();
                var todoToDelete = this.findTodoById(todoArray, item.id);
                var index = todoArray.indexOf(todoToDelete);
                if (index > -1) {
                    todoArray.splice(index, 1);
                }
                StorageService.set(todoArray);
                $state.reload('todoParent.todos');
                this.countItems(todoArray, item);
            };

            this.toggleInput = function(item) {
                this.show = !this.show;
            };

            this.newTodo = '';

            this.saveInput = function(item) {
                item.body = this.newTodo;
                var todoArray = StorageService.get();
                var todoToUpdate = this.findTodoById(todoArray, item.id);
                angular.copy(item, todoToUpdate);
                StorageService.set(todoArray);
                this.show = false;
            };

            this.countItems = function(todoArray) {
                var unchecked = 0;
                todoArray.forEach(function(item) {
                        if (!item.checked) {
                            unchecked++;
                        }
                    });
                    return unchecked;
                };

            this.deleteCompleted = function() {
              var self=this;
              var todoArray = StorageService.get();
              todoArray.forEach(function(item) {
                if (item.checked) {
                  self.delete(item);
                }
              });

            };
});
