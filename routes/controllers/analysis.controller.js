var express = require('express');
var fs = require('fs');
var cp = require('child_process');
var router = express.Router();

var Cword = require('../../models/model')


router.get('/', analysis);
router.get('/getRes', getResult);

function analysis(req, res, next) {
    res.render('analysis', { title: 'Divide Platform' })
}

function getResult(req, res, next) {
    var Data=[];
    //预处理
    /*cp.exec('python main.py', function(error, stdout, stderr){
        if(error) {
            console.info('srderr:'+ stderr);
            return;
        }
    })*/

    /*cp.exec('./dict_build/dict_build-0.0.3/bin/dict_build tmp/avator.txt', function(error, stdout, stderr){
	    if (error) {
            console.log(error.stack);
            console.log('Error code: ' + error.code);
            return;
        }
        else {
                fs.readFile('tmp/words_sort.data', 'utf-8', function(err, data) {
                var dataline = data.split('\n');
                dataline.forEach(function(e){
                var tmpe = e.split(' ');
                    Data.push({
                        "num" : String(tmpe[0]),
                        "word" : String(tmpe[1]),
                        "conf" : String(tmpe[2])
                    });
                });
                res.json(Data);
            });
        console.log('OK!');
        }
    })*/
    
    fs.readFile('tmp/words_sort.data', 'utf-8', function(err, data) {
        var dataline = data.split('\n');
        dataline.forEach(function(e){
            console.log(e);
            var tmpe = e.split('\t');
            Data.push({
                "word" : String(tmpe[0]),
                "freq" : Number(tmpe[1]),
                "info" : Number(tmpe[2]),
                "entro" : Number(tmpe[3]),
                "prob" : Number(tmpe[4])
            });
        });
        res.json(Data);
    });
}

module.exports = router;
