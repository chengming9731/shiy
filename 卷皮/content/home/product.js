/**
 * Created by YZTC on 2017/7/3.
 */
angular.module('productModule',['ui.router'])
    .config(function($stateProvider) {
        $stateProvider
            .state('product',{
                url:'/product',
                templateUrl:'content/home/product.html',
                controller:'productCtrl',
                css:'content/home/product.css'
            })
    })

    .controller("productCtrl",["$scope","$http","$interval",function ($scope,$http,$interval) {
        $http.get("json/product.json").then(function (res) {
            $scope.swiperData16 = res.data.data.special
        });

        // 限时抢购
        var h=23,m=59,s=59;
        $scope.date='— 24 时 00 分 00 秒 —';

        $interval( function run(){
            --s;
            if(s<0){
                --m;
                s=59;
            }
            if(m<0){
                --h;
                m=59;
            }
            if(h<0){
                h=00;
                s=00;
                m=00;
            }
            $scope.date ="— "+ h+' 时 '+m+' 分 '+s+' 秒 '+' —'
        },1000);

    }]);

