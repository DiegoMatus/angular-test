/*==========================================================================*/
/*	Instanciar Módulo de angular
/*==========================================================================*/
var app = angular.module("ToDoList", ['LocalStorageModule']);


/* =========================================================================*/
/*	Crear el controlador para interactuar con la vista
/* =========================================================================*/

/*	"$scope" Se pasa como parámetro dentro de un arreglo para cuando se minifica el Javascript*/
app.controller("ToDoController", ["$scope", "localStorageService", function($scope, localStorageService){


	/* =========================================================================*/
	/*	Variables
	/* =========================================================================*/
	if (localStorageService.get('localStorageList')) {
		$scope.toDoList = localStorageService.get('localStorageList');
	}else{
		$scope.toDoList = [];
	}

	$scope.newActivity = {};


	/* =========================================================================*/
	/*	Métodos
	/* =========================================================================*/
	$scope.$watchCollection('toDoList', function(oldValue, newValue){
		localStorageService.set('localStorageList', $scope.toDoList);
	});

	$scope.addActivity = function(){
		$scope.toDoList.push($scope.newActivity);
		$scope.newActivity = {};
	}

	$scope.cleanList = function(){
		$scope.toDoList = [];
	}

}]);