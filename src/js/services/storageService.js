angular.module('todoApp').service('StorageService', function(localStorageService) {
    getTodo = function() {
        return localStorageService.get('localStorageTodo') || [];
    };

    setTodo = function(todoArray) {
        localStorageService.set('localStorageTodo', todoArray);
    };

    return {
        get: getTodo,
        set: setTodo
    };
});
