var app = angular.module('CristhGunners', ['twitter.timeline']);

app.controller('TodoCtrl', function($scope, $http) {
  $http.get('https://api.github.com/users/CristhGunners')
       .then(function(res){
            $scope.github = res.data;                
        });
});