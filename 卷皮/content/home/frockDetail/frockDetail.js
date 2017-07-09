/**
 * Created by YZTC on 2017/6/30.
 */
angular.module('frockDetailModule',['ui.router'])
    .config(function($stateProvider) {
        $stateProvider
            .state('home.frockDetail',{
                url:'/frockDetail',
                templateUrl:'content/home/frockDetail/frockDetail.html',
                controller:'frockDetailCtrl',
                css:['content/home/frockDetail/frockDetail.css','content/home/home.css']
            })
    })

    .controller('frockDetailCtrl',['$scope','$state','$http',function ($scope,$state,$http) {
            $http.get("json/json5.json").then(function (res) {
                // console.log(res)

                $scope.swiperData13 = res.data.module_ads.multi_block[0].data[0].child;
                $scope.swiperData14 = res.data.module_ads.multi_block[1].data[0].child;
                $scope.swiperData15 = res.data.module_ads.multi_block[2].data[0].child;
            });
            $http.get("json/frock.json").then(function (res) {
                    $scope.swiperData16 = res.data.list;
            })


            var acc=JSON.parse(localStorage.getItem('bao'))
            // console.log(acc)
           // $scope.swiperData13 =
    }]);


















