/**
 * Created by qiangxl on 2017/6/29.
 */
angular.module('globalshopModule',['ui.router'])
	.config(function($stateProvider,$urlRouterProvider) {
		$stateProvider
			.state('globalshop',{
				url:'/globalshop',
				templateUrl:'content/globalshop/globalshop.html',
				controller:'globalshopCtrl',
				css:'content/globalshop/globalshop.css'
			})
	})
	.controller('globalshopCtrl',['$scope','$state','$http','$timeout','$interval',function ($scope,$state,$http,$timeout,$interval) {
				$http.get('json/eathshop.json').then(function (res) {

						$scope.banner=res.data.data[20114];
						$scope.data1=res.data.data[13730];
						$scope.data2=res.data.data[5868];
						$scope.data3=res.data.data[42287];

				});
				$scope.page=function (index) {
					$state.go('globalshop.hot',{index:index})
                }
				$http.get('json/eathshop2.json').then(function (res) {
						console.log(res.data.data.list);//包含30个元素的数组,元素是对象形式

						$scope.data4=res.data.data.list;//文档结构,包含所有的ul

            console.log(	$scope.data4)//数组
          //商品数量默认为0
          for(var j=0;j<$scope.data4.length;j++){
              $scope.data4[j].num=0
          }

          //点击添加按钮,添加商品到购物车
					$scope.addToCar= function (item,i) {

      $timeout(function () {
          var mySwiper = new Swiper ('.swiper-container', {
              loop: true,
              autoplay:1000,
              // 如果需要分页器
              pagination: '.swiper-pagination'
          })
      },50);
      var h=23,m=59,s=59;
      $scope.date='24时00分00秒';


          //item 是商品列表,i表示每个商品的下标
            item.num++
            //点击添加按钮,将商品添加到购物车
            //给每一个对象添加一个自定义属性nubmer,为了在重复产品的提交,保持数字的变化而商品不变
            item.number=1
            //设置本地存储
            //判断,如果对象存在或不存在的情况
            if(JSON.parse(localStorage.getItem('shopcar5'))){

              //如果已经存在,那就直接添加
              var obj = JSON.parse(localStorage.getItem('shopcar5'));
              //如果存在同一个内容,做判断,只增加数量,不增加商品
              //item.shopId用来表示不同的每个商品
              if(obj[item.shopId]){
                //如果购物车已经存在这个商品,就增加个数
                obj[item.shopId].number ++;
              }else{
                //如果购物车不存在这个商品,就添加这个商品
                obj[item.shopId] = item;
              }
              //添加完商品后,重新设置存储
              localStorage.setItem('shopcar5',JSON.stringify(obj));

            }else {
              //如果购物车没有这个商品,就新建一个obj对象用来存放商品
              //不存在,直接添加
              var obj1 = {};

              obj1[item.shopId] = item;
              //添加后,重新更新存储
              localStorage.setItem('shopcar5',JSON.stringify(obj1));
            }
					}
					//添加商品end

          //点击按钮,减少商品
          $scope.reduceToCar= function (item,i) {

					  //产品详情页,添加减少数字变化
              if(item.num<=0){
                item.num=0
              }else{
                item.num--
                //创建一个obj,用来存放减少后的内容
                var obj4=JSON.parse(localStorage.getItem('shopcar5'))
                //同时修改商品对象自定义的number
                obj4[item.shopId].number--

                //将新数据重新保存
                localStorage.setItem('shopcar5',JSON.stringify(obj4))
              }
          }
				})

			$timeout(function () {
					var mySwiper = new Swiper ('.swiper-container', {
							loop: true,
							autoplay:1000,
							// 如果需要分页器
							pagination: '.swiper-pagination'
					})
			},50);

			//倒计时
			var h=23,m=59,s=59;
			$scope.date='24时00分00秒';

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
					$scope.date = h+'时'+m+'分'+s+'秒'
			},1000);

			//切换选项卡操作
			$scope.isborder=[true,false,false,false];
			$scope.change=function (num) {
					console.log(num);
					for (var i=0;i<$scope.isborder.length;i++){
							if(i==num){
									$scope.isborder[i]=true;
							}else {
									$scope.isborder[i]=false;
							}
					}
					if (num==1){
							$scope.paix='-cfav'
					}
					if (num==2){
							$scope.paix='-sale'
					}
					if (num==0){
							$scope.paix='cfav'
					}
			}




}]);