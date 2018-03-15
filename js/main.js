var app = angular.module('myApp', ['ui.router']);
app.config(["$stateProvider", "$locationProvider", function ($stateProvider) {

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
        .state("cms", {//cms
            url: '/cms',
            templateUrl:'other_page/cms.html'
        })
        .state("oms", {//cms
            url: '/oms',
            templateUrl:'other_page/oms.html'
        })
        .state("wms", {//cms
            url: '/wms',
            templateUrl:'other_page/wms.html'
        })
        .state("vms", {//cms
            url: '/vms',
            templateUrl:'other_page/vms.html'
        })
        .state("case_sale", {//行业案例-新零售
            url: '/case_sale',
            templateUrl:'other_page/case_sale.html'
        })
        .state("case_ec", {//行业案例-跨境电商
            url: '/case_ec',
            templateUrl:'other_page/case_ec.html'
        })
        .state("case_app", {//行业案例-app
            url: '/case_app',
            templateUrl:'other_page/case_app.html'
        })
        .state("case_wechat", {//行业案例-微信
            url: '/case_wechat',
            templateUrl:'other_page/case_wechat.html'
        })
}]);

//去掉url中的感叹号
app.config(['$locationProvider',function($locationProvider){
    $locationProvider.hashPrefix("");
}]);
