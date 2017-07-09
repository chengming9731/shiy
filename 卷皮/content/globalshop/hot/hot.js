/**
 * Created by 张 on 2017/7/4.
 */
angular.module('hotModule',['ui.router'])
    .config(function ($stateProvider) {
        $stateProvider
            .state('globalshop.hot',{
                url:'/hot:index',
                templateUrl:'content/globalshop/hot/hot.html',
                controller:'hotCtrl',
                css:'content/globalshop/hot/hot.css'
            })

    }).controller('hotCtrl',['$scope','$state','$http','$stateParams',function ($scope,$state,$http,$stateParams) {

        console.log($stateParams.index);
        $http.get('json/eathshop.json').then(function (res) {
            $scope.data4=res.data.data.list;
        });
}]);