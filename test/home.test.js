'use strict';
 
describe('MainCtrl', function(){
    var scope, $httpBackend;

    beforeEach(module('Application'));

     beforeEach(inject(function($rootScope, $controller, _$httpBackend_){
         $httpBackend = _$httpBackend_;
         $httpBackend.when('GET', 'pensum.json').respond([{id: 1, name: 'Bob'}, {id:2, name: 'Jane'}]);
 
         scope = $rootScope.$new();
         $controller('MainCtrl', {$scope: scope});
     }));
    
     it('La variable deberia estar inicializada"', function(){

         expect(scope.text).toBe("");
     });/*
     it('should fetch list of users', function(){
         $httpBackend.flush();
         expect(scope.users.length).toBe(2);
         expect(scope.users[0].name).toBe('Bob');
     });*/

});
