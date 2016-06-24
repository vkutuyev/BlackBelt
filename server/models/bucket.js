var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BucketSchema = new mongoose.Schema({
    done: Boolean,
    title: String,
    desc: String,
    created: String,
    users: []
});

var UserSchema = new mongoose.Schema({
    name: String
});
//
// var CommentSchema = new mongoose.Schema({
//     _message: {type: Schema.Types.ObjectId, ref: 'Message'},
//     commenttext: String,
//     commentUser: String
// });
//
mongoose.model('Bucket', BucketSchema);
mongoose.model('User', UserSchema);
