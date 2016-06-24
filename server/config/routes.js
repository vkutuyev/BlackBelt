var buckets = require('./../controllers/buckets.js');

module.exports = function(app) {

    app.post('/login', function(req, res){
        buckets.login(req, res);
    })
    app.get('/users', function(req, res){
        buckets.getAll(req, res);
    })
    app.post('/addBucket', function(req, res){
        buckets.addBucket(req, res);
    })
    app.post('/allBuckets', function(req, res){
        buckets.getBuckets(req, res);
    })
    app.post('/done', function(req, res){
        buckets.done(req, res);
    })
    app.post('/getUser', function(req, res){
        buckets.getUser(req, res);
    })

}
