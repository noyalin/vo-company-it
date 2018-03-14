var app = angular.module('myApp', ['ui.router']);
app.config(["$stateProvider",  function ($stateProvider) {
    $stateProvider
        .state("sale", {//新零售
            url: '/sale',
            templateUrl:'other_page/sale.html'
        })
        .state("ec", {//跨境电商
            url: '/ec',
            templateUrl:'other_page/ec.html'
        })
        .state("app", {//app
            url: '/app',
            templateUrl:'other_page/app.html'
        })
        .state("wechat", {//微信
            url: '/wechat',
            templateUrl:'other_page/wechat.html'
        })
}]);

