belt_app.factory('BucketFactory', function($http){

    var factory = {};
    var users = [];
    var buckets = [];
    var currentUser = {};


    factory.getAll = function(callback) {
        $http.get('/users').success(function(dbusers){
            users = dbusers;
            callback(users, currentUser, buckets);
        })
    }
    factory.getBuckets = function(user, callback) {
        $http.post('/allBuckets', {user}).success(function(allBuckets){
            buckets = allBuckets;
            callback(buckets);
        })
    }

    factory.login = function(name, callback) {
        $http.post('/login', {name} ).success(function(user){
            if(user != 'Error'){
                currentUser = user;
                callback('Yup');
            }
            else{
                callback('');
            }
        })
    }

    factory.addItem = function(bucket, callback){
        $http.post('/addBucket', bucket).success(function(buckets){
            callback(buckets);
        })
    }

    factory.doneItem = function(user, item, callback){
        console.log('=========user=========');
        console.log(user);
        console.log('==================');
        var check = {user: user, item: item};
        $http.post('/done', check).success(function(buckets){
            console.log('task completed!');
            callback(buckets);
        })
    }

    factory.getUser = function(user, callback){
        $http.post('/getUser', {user}).success(function(user){
            callback(user);
        })
    }

    return factory;

})
