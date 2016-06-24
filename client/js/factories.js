belt_app.factory('Thing1Factory', function($http){

    var factory = {};
    var users = [];

    // factory.getTopic = function(topic, callback){
    //     $http.post('/getTopic', {topic}).success(function(top){
    //         topic = top;
    //         callback(topic);
    //     })
    // }

    // factory.addPost = function(post, callback){
    //     $http.post('/addPost', post).success(function(){
    //         $http.get('/getPosts').success(function(dbposts){
    //             posts = dbposts;
    //             callback(posts);
    //         })
    //     })
    // }

    return factory;

})

belt_app.factory('Thing2Factory', function($http){

    var factory = {};

    return factory;
    
})
