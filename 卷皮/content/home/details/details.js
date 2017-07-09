/**
 * Created by YZTC on 2017/7/3.
 */
angular.module('detailsModule',['ui.router'])
    .config(function($stateProvider) {
        $stateProvider
            .state('details',{
                url:'/details',
                templateUrl:'content/home/details/details.html',
                controller:'detailsCtrl',
                css:['content/home/details/details.css','content/home/home.css']
            })
    })

    .controller('detailsCtrl',['$scope','$http','$timeout',function ($scope,$http,$timeout) {
        // 主体图片
        $timeout(function () {
            var mySwiper = new Swiper ('.swiper-container', {
                loop: true,
                pagination: '.swiper-pagination',
                paginationType: 'fraction'
            })
        },50);

        $http.get("json/details.json").then(function (res) {
            $scope.item17=res.data.info
        });
        // 点击切换
        $scope.active='active';
        $scope.error= function () {
            $scope.active1='';
            $scope.active2='';
            $scope.active='active'
        };
        $scope.error1= function () {
            $scope.active1='active';
            $scope.active2='';
            $scope.active=''
        };
        $scope.error2= function () {
            $scope.active2='active';
            $scope.active1='';
            $scope.active=''
        };

        // 点击显
        $scope.sku=function () {
            $scope.sku_mask=true;
            $scope.sku_list='sku_list';
        };
        // 点击隐
        $scope.headn=function () {
            $scope.sku_mask=false;
            $scope.sku_list='sku_list';
        }
    }]);







