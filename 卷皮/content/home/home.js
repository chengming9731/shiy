/**
 * Created by qiangxl on 2017/6/28.
 */
angular.module('homeModule',['ui.router'])
  .config(function($stateProvider) {
      $stateProvider
        .state('home',{
          url:'/home',
          templateUrl:'content/home/home.html',
          controller:'homeCtrl',
          css:'content/home/home.css'
        })
  })

  .controller('homeCtrl',['$scope','$state','$http','$timeout',function ($scope,$state,$http,$timeout) {
        // $http.get("json/tabbar.json").then(function (res) {
        //     $scope.swiperData1 = res.data.menu_list[0].subtab
        // });
        // 首页数据
       $http.get("json/json4.json").then(function (res) {
           $scope.swiperData2 = res.data.banner_ads;
           $scope.swiperData3 = res.data.module_ads.multi_block[0].data[0].child;
           $scope.swiperData4 = res.data.module_ads.multi_block[1].data[0].child;
           $scope.swiperData5 = res.data.module_ads.multi_block[2].data[0].child;
           $scope.swiperData6 = res.data.module_ads.multi_block[3].data[0].child;
           $scope.swiperData7 = res.data.module_ads.multi_block[4].data[0].child;
           $scope.swiperData8 = res.data.module_ads.multi_block[5].data[0].child;
           $scope.swiperData9 = res.data.module_ads.multi_block[6].data[0].child;
       });
       // 轮播数据
      $timeout(function () {
          var mySwiper = new Swiper ('.swiper-container', {
              loop: true,
              autoplay:1000,
              // 如果需要分页器
              pagination: '.swiper-pagination'
          })
      },50);
      // 模块广告
      var arr =[];
      $http.get("json/home.json").then(function (res) {
        //  console.log(res);
          $scope.swiperData = res.data.list;
          angular.forEach($scope.swiperData,function (data) {
              //console.log(data)
              if(data.shop_logo){//有
                  $scope.swiperData=res.data.list
              }else{//没有
                 // console.log(data)
                    arr.push(data)
                  $scope.swiperDat=arr
                  console.log($scope.swiperData)
              }
          })


      });
      $http.get("json/json2.json").then(function (res) {
          $scope.swiperData11 = res.data.list;
      });
      $http.get("json/json3.json").then(function (res) {
          $scope.swiperData12 = res.data.list;
      });

      $http.get("json/Shoes.json").then(function (res) {
          var baoa =res.data.list
          $scope.xie=function () {
              localStorage.setItem('bao',JSON.stringify(baoa))
              $state.go('home.frockDetail')

          }
      })
  }]);


















