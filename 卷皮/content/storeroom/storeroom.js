/**
 * Created by qiangxl on 2017/6/29.
 */
(function() {
	var html = document.documentElement;
	var hWidth = html.getBoundingClientRect().width;
	html.style.fontSize = hWidth / 16 + "px";
})()
angular.module('storeroomModule', ['ui.router'])
	.config(function($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('storeroom', {
				url: '/storeroom',
				templateUrl: 'content/storeroom/storeroom.html',
				controller: 'storeroomCtrl',
				css: 'content/storeroom/storeroom.css'
			})
	})

	.service('getData', ['$http', function($http) {
		this.get = function() {
			return $http.get('json/storeroom.json');
		}
	}])

	.controller('storeroomCtrl', ['$scope', '$state', 'getData', function($scope, $state, getData) {
		$scope.name = '345';
		

		getData.get().then(function(res) {
			//			console.log(res.data);
			$scope.storeData = res.data.data.list;
			$scope.isActive = false;
			$scope.isActivea = false;
			$scope.isActiveb = false;
			$scope.orderStyle='';
			$scope.togglee=false;
			$scope.isActive = true;
			$scope.changeActive = function() {
				
				$scope.isActivea = false;
				$scope.isActiveb = false;
				$scope.isActive = true;

			}
			$scope.changeActivea = function() {
				
				$scope.isActiveb = false;
				$scope.isActive = false;
				$scope.isActivea = true;
				
				$scope.togglee=!$scope.togglee;
			
				if($scope.togglee){
					$scope.orderStyle='price*1';
				}else{
					$scope.orderStyle='-price*1';
				}
					

			}
			$scope.changeActiveb = function() {
				
				$scope.isActivea = false;				
				$scope.isActive = false;
				$scope.isActiveb = true;
				
				$scope.toggleb=!$scope.toggleb;
			
				if($scope.toggleb){
					$scope.orderStyle='sale*1';
				}else{
					$scope.orderStyle='-sale*1';
				}

			}
		})
	}])