angular.module('myApp', [])
    .controller('myController', function($scope) {
        $scope.currentDate = new Date();
        $scope.JSONObj = { title: "myTitle" };
        $scope.word = "Supercalifragilisticexpialidocious";
        $scope.days = ['Moday', 'Tueday', 'Wednesday', 'Thursday', 'Friday'];
    });