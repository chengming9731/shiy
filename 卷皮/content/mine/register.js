/**
 * Created by qiangxl on 2017/6/29.
 */
angular.module('registerModule',['ui.router'])
  .config(function($stateProvider,$urlRouterProvider) {
    $stateProvider
      .state('register',{
        url:'/register',
        templateUrl:'content/mine/register.html',
        controller:'registerCtrl',
        css:'content/mine/register.css'
      })
  })
  .controller('registerCtrl',['$scope','$state','$interval',function ($scope,$state,$interval) {
    $scope.telp='请输入手机号码'
    $scope.paracont='获取验证码'
    $scope.tab1='tab1'
    $scope.parac1='parac1';
    var sec=60
    $scope.par=function () {
      $scope.paracont=sec+'秒后重发'
      var timer=$interval(function () {
        if(sec<=0){
          $interval.cancel(timer)
          $scope.paracont='重发验证码';
          sec=60;
        }else{
          sec--;
          $scope.paracont=sec+'秒后重发';
        }
      },1000)
    }
        //验证手机号码
        $scope.data={}
        $scope.button='button'
        $scope.focus= function () {
          $scope.button='btn'
        }
        //当页面打开的时候，警告提示隐藏
        $scope.showAllErr=false;

        // $scope.change= function () {
        //   $scope.button='btn'
        // }
    //点击提交的时候，表单不通过，要显示
        $scope.ck= function () {
          $scope.showAllErr=$scope.regist.$invalid
          if($scope.regist.$valid){
            console.log($scope.data)
  }
        }
  }])
