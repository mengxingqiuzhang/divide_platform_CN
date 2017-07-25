var config = require('./config.js');
var mongoose = require('mongoose');

//
mongoose.connect(config.mongodb);

//
mongoose.connection.on("open", function() {
    console.log("数据库连接成功");
});

//
mongoose.connection.on("error", function(error) {
    console.log("数据库连接失败" + error);
});

//schema
var CwordSchema = new mongoose.Schema({
    num: Number,
    word: String,
    conf: Number
});

module.exports = mongoose.model('cword', CwordSchema);