var app = angular.module('myApp', ['ui.router']);
app.config(["$stateProvider", "$locationProvider", function ($stateProvider) {

    $stateProvider
        .state("sale", {//新零售
            url: '/solution/sale',
            templateUrl:'sale.html'
        })
        .state("ec", {//跨境电商
            url: '/solution/ec',
            templateUrl:'ec.html'
        })
        .state("app", {//app
            url: '/solution/app',
            templateUrl:'app.html'
        })
        .state("wechat", {//微信
            url: '/solution/wechat',
            templateUrl:'wechat.html'
        })
        .state("cms", {//cms
            url: '/product/cms',
            templateUrl:'cms.html'
        })
        .state("oms", {//cms
            url: '/product/oms',
            templateUrl:'oms.html'
        })
        .state("wms", {//cms
            url: '/product/wms',
            templateUrl:'wms.html'
        })
        .state("vms", {//cms
            url: '/product/vms',
            templateUrl:'vms.html'
        })
        .state("case_sale", {//行业案例-新零售
            url: '/case/sale',
            templateUrl:'case_sale.html'
        })
        .state("case_ec", {//行业案例-跨境电商
            url: '/case/ec',
            templateUrl:'case_ec.html'
        })
        .state("case_app", {//行业案例-app
            url: '/case/app',
            templateUrl:'case_app.html'
        })
        .state("case_wechat", {//行业案例-微信
            url: '/case/wechat',
            templateUrl:'case_wechat.html'
        })
        .state("introduce", {//行业案例-微信
            url: '/about/introduce',
            templateUrl:'introduce.html'
        })
        .state("contact", {//行业案例-微信
            url: '/about/contact',
            templateUrl:'contact.html'
        })
}]);

//去掉url中的感叹号
app.config(['$locationProvider',function($locationProvider){
    $locationProvider.hashPrefix("");
}]);
