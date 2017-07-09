/**
 * Created by qiangxl on 2017/6/29.
 */
angular.module('shopcarModule', ['ui.router'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('shopcar', {
        url: '/shopcar',
        templateUrl: 'content/shopcar/shopcar.html',
        controller: 'shopcarCtrl',
        css: 'content/shopcar/shopcar.css'
      })
  })
  .controller('shopcarCtrl', ['$scope', function ($scope) {
    //点击导航 编辑变化
    $scope.name = '编辑'
    $scope.removeDiv = {show: false}
    $scope.user = function () {
      $scope.removeDiv.show = !$scope.removeDiv.show
      if ($scope.name == '编辑') {
        $scope.name = '完成'
        $scope.bookmark=true;
        $scope.count1=false;

      } else if ($scope.name == '完成') {
        $scope.name = "编辑"
        $scope.bookmark=false;
        $scope.count1=true;
      }
    }
    //购物车效果

    $scope.bookmark=false;
    $scope.count1=true;
    $scope.data = JSON.parse(localStorage.getItem('shopcar5'));
      console.log($scope.data);

    //点击购物车添加按钮,商品数量增加
    //如果页面有产品,那就将购物车显示出来
          if (JSON.stringify($scope.data) == '{}') {

            $scope.isempty = false;
            $scope.empty = true;
          } else {
            $scope.isempty = true;
            $scope.empty = false;
          }

    $scope.spre2 = function (item) {
      //点击添加按钮,获取当前这个对象
      var data = JSON.parse(localStorage.getItem('shopcar5'))
      //当前这个对象的数量增加
      data[item.shopId].number++;
      //重新设置存储
      localStorage.setItem('shopcar5', JSON.stringify(data))
      $scope.data = JSON.parse(localStorage.getItem('shopcar5'))
      console.log( $scope.data)

    }

    //点击减少按钮,商品数量减少
    $scope.spre1 = function (key, item) {

      var data = JSON.parse(localStorage.getItem('shopcar5'))
      //当前这个对象的数量减少
      //重新设置存储
      if (data[item.shopId].number <= 0) {
        data[item.shopId].number = 0
        //当等于0的时候,删除本条商品
        delete data[key]
      } else {
        data[item.shopId].number--;
      }
      localStorage.setItem('shopcar5', JSON.stringify(data))
      //更新原有的数据
      $scope.data = JSON.parse(localStorage.getItem('shopcar5'))

    }


    //点击删除
    $scope.remove = function (key) {
      var data = JSON.parse(localStorage.getItem('shopcar5'))
      //删除这条信息
      delete data[key]
      localStorage.setItem('shopcar5', JSON.stringify(data))
      //更新数据
      $scope.data = JSON.parse(localStorage.getItem('shopcar5'))
      console.log($scope.data)

      //当删除所有的商品的时候,页面变化
      if (JSON.stringify($scope.data) == '{}') {
        $scope.isempty = false;
        $scope.empty = true;

      } else {
        $scope.isempty = true;
        $scope.empty = false;
      }
    }

    //点击选中商品
    $scope.count=0
    $scope.checkedProducts = [];
    $scope.check1= function (key) {
            //获取当前这个对象
        $scope.data=JSON.parse(localStorage.getItem('shopcar5'))
        var checkItem=$scope.data
      //遍历这个对象,获取里面的数据
      var index = getIndex($scope.checkedProducts,checkItem[key]);

        if(typeof index == 'boolean' && !index){
          $scope.checkedProducts.push(checkItem[key]);
      } else {
          $scope.checkedProducts.splice(index,1);
      }
      $scope.count = 0;
      for(var i = 0; i < $scope.checkedProducts.length;i++ ){
        $scope.count += $scope.checkedProducts[i].price.substr(1) * $scope.checkedProducts[i].number;
      }

    }

    function  getIndex(arr,product) {

      for(var i = 0 ; i< arr.length; i ++){
        if(arr[i].iid == product.iid){
          return i;
        }
      }
      return false;
    }


  }])