var mongoose = require('mongoose');
var User = mongoose.model('User');
var Bucket = mongoose.model('Bucket');

module.exports = (function() {
    return {

        login: function(req, res){
            User.findOne({name: req.body.name}, function(err, user){
                if(user){
                    res.json(user);
                }
                else{
                    res.send('Error');
                }
            })
        },

        getAll: function(req, res){
            User.find({}, function(err, users){
                res.json(users);
            })
        },

        getBuckets: function(req, res){
            Bucket.find({},function(err, buckets){
                if(err){
                    console.log('erorr in getBuckets fetch');
                }
                else{
                    var sendbuckets = [];
                    for(var bucket of buckets){
                        if(bucket.users[0] == req.body.user || bucket.users[1] == req.body.user){
                            sendbuckets.push(bucket);
                        }
                    }
                    res.json(sendbuckets);
                }
            })
        },

        done: function(req, res){
            for(var user of req.body.item.users){
                if(req.body.user == user){
                    Bucket.update({_id: req.body.item._id}, {$set: {done: true}}, function(err){
                        if(err){
                            console.log('error updating bucket');
                        }
                        else {
                            Bucket.find({}, function(err, buckets){
                                var sendbuckets = [];
                                for(var bucket of buckets){
                                    if(bucket.users[0] == req.body.user || bucket.users[1] == req.body.user){
                                        sendbuckets.push(bucket);
                                    }
                                }
                                res.json(sendbuckets);
                            })
                        }
                    })
                }
            }
        },

        addBucket: function(req, res){
            console.log('=========red.body=========');
            console.log(req.body);
            console.log('==================');
            var bucket = new Bucket(req.body);
            bucket.save(function(err){
                if(err){
                    console.log('error in server addBucket');
                }
                else{
                    Bucket.find({},function(err, buckets){
                        var sendbuckets = [];
                        for(var bucket of buckets){
                            if(bucket.users[0] == req.body.users[0] || bucket.users[1] == req.body.users[0]){
                                sendbuckets.push(bucket);
                            }
                        }
                        res.json(sendbuckets);
                    })
                }
            })
        },


        getUser: function(req, res){
            User.findOne({_id: req.body.user}, function(err, user){
                if(err){
                    console.log('error in getUser');
                }
                else {
                    res.json(user);
                }
            })
        }


    }  // End of return {}
})
();
