var express = require('express');
var fs = require('fs');
var cp = require('child_process');
var router = express.Router();

var Cword = require('../../models/model')


router.get('/', doCalcu);
router.get('/doCal', doCalcu);
router.get('/getRes', getResult);

function analysis(req, res, next) {
    res.render('analysis', { title: 'Divide Platform' })
}

function doCalcu(req, res, next) {
    cp.exec('python main.py', function(error, stdout, stderr){
        if(stdout.length>1) {
            console.log('you offer args:', stdout);
        } else {
            console.log('you don\'t offer args');
        }
        if(error) {
            console.info('srderr:'+ stderr);
        }
    })
}

function getResult(req, res, next) {
    var Data=[];
    
    fs.readFile('tmp/avator', 'utf-8', function(err, data) {
        var dataline = data.split('\n');
        dataline.forEach(function(e){
            var tmpe = e.split(' ');
            Data.push({
                "num" : Number(tmpe[0]),
                "word" : String(tmpe[1]),
                "conf" : Number(tmpe[2])
            });
        });
        res.json(Data);
    });
    
}

module.exports = router;
