var belt_app = angular.module('belt_app', ['ngRoute', 'ngAnimate', 'ngStorage']);

belt_app.config(function ($routeProvider) {
    $routeProvider
        .when('/partial1',{
            templateUrl: 'partials/partial1.html'
        })
        .when('/partial2',{
            templateUrl: 'partials/partial2.html'
        })
        // .when('/topic/:id',{
        //     templateUrl: 'partials/post.html'
        // })
})

belt_app.controller('Partial1Controller', function($scope, $location, $localStorage, $routeParams, Thing1Factory, Thing2Factory) {

    // $scope.variable = [];
    //
    // $scope.showTopic = function(topic){
    //     PostFactory.getTopic(topic, function(top){
    //         var url = top._id;
    //         $location.url('/topic/'+url);
    //     });
    // }
    //
    // $scope.addPost = function(){
    //     $scope.newPost.OP = $scope.currentUser.name;
    //     PostFactory.addPost($scope.newPost, function(posts){
    //         $scope.posts = posts;
    //     });
    //     $scope.newPost = {};
    //
    //     UserFactory.addPostCount($scope.currentUser, function(users){
    //         $scope.users = users;
    //     });
    // }

})

belt_app.controller('Partial2Controller', function($scope, $location, $localStorage, $routeParams, Thing1Factory, Thing2Factory) {

    $scope.test = function(message){
        console.log('=========test=========');
        console.log(message);
        console.log('==================');
    }

})
