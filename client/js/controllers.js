var belt_app = angular.module('belt_app', ['ngRoute', 'ngAnimate', 'ngStorage', 'ngMessages']);

belt_app.config(function ($routeProvider) {
    $routeProvider
        .when('/index', {
            templateUrl: 'partials/login.html'
        })
        .when('/dash',{
            templateUrl: 'partials/dash.html'
        })
        .when('/user/:id',{
            templateUrl: 'partials/user.html'
        })
        .otherwise({
            templateUrl: 'partials/login.html'
        })
})

belt_app.controller('BucketsController', function($scope, $location, $localStorage, $routeParams, BucketFactory) {

    BucketFactory.getAll(function(allUsers, currUser, buckets){
        $scope.users = allUsers;
        $scope.currentUser = currUser;
        if(!$routeParams.id){
            BucketFactory.getBuckets($scope.currentUser._id, function(buckets){
                $scope.buckets = buckets;
            })
        }
        else{
            BucketFactory.getUser($routeParams.id, function(user){
                $scope.dispUser = user;
            })
            BucketFactory.getBuckets($routeParams.id, function(buckets){
                $scope.buckets = buckets;
            })
        }
    })



    $scope.login = function() {
        BucketFactory.login($scope.username, function(check){
            if(check == 'Yup'){
                $scope.error = '';
                $location.url('/dash');
            }
            else{
                $scope.error = 'Log in as existing user';
                $scope.username = '';
            }
        });

    }

    $scope.addItem = function() {

        if($scope.bucketItem.title.length < 5){
            $scope.error = 'Item title must be at least 5 characters long for some reason.'
        }
        else if($scope.bucketItem.desc.length < 10){
            $scope.error = 'Item description must be at least 10 characters long for some reason.'
        }
        else {
            var now = moment().format('MMM. Do, YYYY');
            var bucketItem = {done: false, title: $scope.bucketItem.title, desc: $scope.bucketItem.desc, created: now, users: [$scope.currentUser._id]};

            if($scope.taggedName){
                bucketItem.users.push($scope.taggedName._id);
            }

            BucketFactory.addItem(bucketItem, function(buckets){
                $scope.buckets = buckets;
            })

            $scope.error = '';

            $scope.bucketItem = {};
        }

    }

    $scope.done = function(item) {

        for(var user of item.users){
            if(user == $scope.currentUser._id){
                if(!$routeParams.id){
                    BucketFactory.doneItem($scope.currentUser._id, item, function(buckets){
                        $scope.buckets = buckets;
                    })
                }
                else{
                    BucketFactory.doneItem($routeParams.id, item, function(buckets){
                        $scope.buckets = buckets;
                    })
                }

            }
        }
    }

})
