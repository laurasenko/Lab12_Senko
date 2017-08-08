var app = angular.module ("app", []);

	app.controller("myCtrl", function($scope) {

	$scope.taskList = [
		{task: "make dinner"},
		{task: "wash dishes"},
		{task: "do homework"} 
	];

	$scope.addTask = function () {
		var item = {
			task: $scope.inputTask
		}
		$scope.taskList.push(item);
		clear();
	};

	function clear(){
		$scope.inputTask = "";
	};

	$scope.removeItemAt = function(index) {
        $scope.taskList.splice(index, 1);
    }
});