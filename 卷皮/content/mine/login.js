/**
 * Created by qiangxl on 2017/6/30.
 */

angular.module('loginModule',['ui.router'])
  .config(function($stateProvider,$urlRouterProvider) {
    $stateProvider
      .state('login',{
        url:'/login',
        templateUrl:'content/mine/login.html',
        controller:'loginCtrl',
        css:'content/mine/login.css'
      })
  })
  .controller('loginCtrl',['$scope','$state','$stateParams','$interval',function ($scope,$state,$stateParams,$interval){
          //切换账号登录和手机号登录
          $scope.mobail=false
          $scope.ismobail=true
          $scope.active='active'
    $scope.login= function () {
          $scope.mobail=false;
          $scope.ismobail=true
          $scope.active1=''
          $scope.active='active'
        }

    $scope.login1= function () {
          $scope.mobail=true;
          $scope.ismobail=false;
          $scope.active1='active'
          $scope.active=''
        }
        //切换效果,end
    //验证码倒计时
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
    $scope.showAllErr=false;
    $scope.ck= function () {
      $scope.showAllErr = $scope.regist.$invalid
      if ($scope.regist.$valid) {
        console.log($scope.data)
      }
    }

  }])