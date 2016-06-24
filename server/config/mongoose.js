var mongoose = require('mongoose');
var fs = require('fs');
mongoose.connect('mongodb://localhost/black_belt');
var models_path = __dirname + '/../models'

fs.readdirSync(models_path).forEach(function(file) {
    if(file.indexOf('.js') > 0) {
        require(models_path + '/' + file);
    }
})


// The oh shit mongo closed command
// ps -ax | grep mongo
// sudo kill pid (sudo mongo)
