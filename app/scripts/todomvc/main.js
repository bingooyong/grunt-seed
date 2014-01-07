/*global require*/


require(['angular', 'jQuery', 'todomvc/app', 'todomvc/controllers/todo', 'todomvc/directives/todoFocus'], function (angular, $) {
    angular.bootstrap(document, ['todomvc']);
});