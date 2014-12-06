var app = angular.module('Matriculacion', ['ngRoute', 'ngResource']);

app.config(function ($routeProvider) {

  $routeProvider
    .when('/', {
      controller:'LoginCtrl',
      templateUrl:'views/login.html'
    })
    .when('/registro', {
      controller:'RegistroCtrl',
      templateUrl:'views/registro.html'
    })
    .when('/seleccion', {
      controller:'SeleccionCtrl',
      templateUrl:'views/seleccion.html'
    });/*
    .otherwise({
      redirectTo:'/'
    });*/


});
