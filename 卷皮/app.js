/**
 * Created by qiangxl on 2017/6/28.
 */
angular.module('myApp',['ui.router','angularCSS','homeModule','frockDetailModule','productModule','mineModule','shopcarModule','storeroomModule','detailsModule','globalshopModule','loginModule','registerModule','hotModule'])
.config(function ($stateProvider,$urlRouterProvider) {
    $urlRouterProvider.otherwise('/globalshop')
});