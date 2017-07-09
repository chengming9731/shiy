/**
 * Created by qiangxl on 2017/6/29.
 */
angular.module('mineModule',['ui.router'])
  .config(function($stateProvider,$urlRouterProvider) {
    $stateProvider
      .state('mine',{
        url:'/mine',
        templateUrl:'content/mine/mine.html',
        controller:'mineCtrl',
        css:'content/mine/mine.css'
      })
  })
  .controller('mineCtrl',['$scope','$state',function ($scope,$state) {

  }])