var app = angular.module('myApp', ['ui.router']);
app.config(["$stateProvider", "$locationProvider", function ($stateProvider) {

    $stateProvider
        .state("sale", {//新零售
            url: '/solution/sale',
            templateUrl:'other_page/sale.html'
        })
        .state("ec", {//跨境电商
            url: '/solution/ec',
            templateUrl:'other_page/ec.html'
        })
        .state("app", {//app
            url: '/solution/app',
            templateUrl:'other_page/app.html'
        })
        .state("wechat", {//微信
            url: '/solution/wechat',
            templateUrl:'other_page/wechat.html'
        })
        .state("cms", {//cms
            url: '/product/cms',
            templateUrl:'other_page/cms.html'
        })
        .state("oms", {//cms
            url: '/product/oms',
            templateUrl:'other_page/oms.html'
        })
        .state("wms", {//cms
            url: '/product/wms',
            templateUrl:'other_page/wms.html'
        })
        .state("vms", {//cms
            url: '/product/vms',
            templateUrl:'other_page/vms.html'
        })
        .state("case_sale", {//行业案例-新零售
            url: '/case/sale',
            templateUrl:'other_page/case_sale.html'
        })
        .state("case_ec", {//行业案例-跨境电商
            url: '/case/ec',
            templateUrl:'other_page/case_ec.html'
        })
        .state("case_app", {//行业案例-app
            url: '/case/app',
            templateUrl:'other_page/case_app.html'
        })
        .state("case_wechat", {//行业案例-微信
            url: '/case/wechat',
            templateUrl:'other_page/case_wechat.html'
        })
        .state("introduce", {//行业案例-微信
            url: '/about/introduce',
            templateUrl:'other_page/introduce.html'
        })
        .state("contact", {//行业案例-微信
            url: '/about/contact',
            templateUrl:'other_page/contact.html'
        })
}]);

//去掉url中的感叹号
app.config(['$locationProvider',function($locationProvider){
    $locationProvider.hashPrefix("");
}]);
