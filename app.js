angular.module('todoApp', ['ui.router', 'LocalStorageModule'])

.config(function($stateProvider, $urlRouterProvider) {
  

  $stateProvider.state('todoParent', {
    url: '/',
    abstract: true,
    template: '<ui-view></ui-view>'
  }).state('todoParent.add', {
    url: 'add',
    templateUrl: 'src/templates/add.html',
    controller: 'TodoController as todoCtrl'
  }).state('todoParent.todos', {
    url: 'todos?filter',
    templateUrl: 'src/templates/todos.html',
    controller: 'ListController as list'
  });
});
