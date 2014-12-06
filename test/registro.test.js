'use strict';
 
describe('RegistroCtrl', function(){
    var scope;

    beforeEach(module('Matriculacion'));

     beforeEach(inject(function($rootScope, $controller, _$httpBackend_){
        
         scope = $rootScope.$new();
         $controller('RegistroCtrl', {$scope: scope});
        
     }));
    
     it('La variable deberia estar inicializada"', function(){

         expect(scope.apellido).toBe("");
         expect(scope.apellido2).toBe("");
     });

     it('La cedula debe ser valida', function(){
    
        scope.cedula = "40200522775";
         expect(scope.validateCedula(scope.cedula)).toBe(false); 
     });

});
