/*global require*/


require(['angular', 'todomvc/app', 'todomvc/controllers/todo', 'todomvc/directives/todoFocus'], function (angular) {
    angular.bootstrap(document, ['todomvc']);
});