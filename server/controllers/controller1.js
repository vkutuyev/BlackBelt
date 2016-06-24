var mongoose = require('mongoose');
// var Model1 = mongoose.model('Model1');
// var Model2 = mongoose.model('Model2');

module.exports = (function() {
    return {

        // getTopic: function(req, res){
        //     Post.findOne({_id: req.body.topic})
        //         .populate({
        //             path: 'messages',
        //             populate: {path: 'comments'}
        //         })
        //         .exec(function(err, post){
        //             if(err){
        //                 console.log('error in getTopic server cont');
        //             }
        //             else {
        //                 res.json(post);
        //             }
        //         })
        // },

        // addComment: function(req, res){
        //
        //     Post.findOne({_id: req.body.topic})
        //         .populate({
        //             path: 'messages',
        //             populate: {path: 'comments'}
        //         })
        //         .exec(function(err, post){
        //             Message.findOne({_id: req.body.message._id})
        //                    .populate('comments')
        //                    .exec(function(err, message){
        //                        var comment = new Comment(req.body.comment);
        //                        comment._message = message._id;
        //                        comment.save(function(err){
        //                            if(err){
        //                                console.log('error in addComment');
        //                            }
        //                            else {
        //                                message.comments.push(comment);
        //                                message.save(function(err){
        //                                    if(err){
        //                                        console.log('error in addComment');
        //                                    }
        //                                    else {
        //                                        res.json(message);
        //                                     }
        //                                 })
        //                             }
        //                         })
        //                     })
        //             })
        // },

        // getPosts: function(req, res){
        //     Post.find({}, function(err, posts){
        //         if(err){
        //             console.log('error in getPosts server cont');
        //         }
        //         else {
        //             res.json(posts);
        //         }
        //     })
        // }

    }  // End of return {}
})
();
