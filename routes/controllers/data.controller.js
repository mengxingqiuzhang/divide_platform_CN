var express = require('express');
var router = express.Router();

var Cword = require('../../models/model')

router.get('/', data);
router.get('/find', reData);

function data(req, res, next) {
    res.render('data', { title: 'Divide Platform' })
}

function reData(req, res, next) {
    var Data=[];
    // res.send('1')
    if (req.query.wordq == undefined) {
        res.json([]);
        return;
    }
    
	Cword.find({word: String(req.query.wordq) },function(err, result) {
        if(err) {
            console.log(err);
            return;
        }

		console.log('<!---result---->');
        console.log(result);

        if(result == undefined) {
            console.log('Error');
            res.json([]);
            
        } else if(result.length == 0) {
            console.log('Load Finished');
            res.json([]);
            
        } else {
            console.log('Begin push data')
            result.forEach(function(e) {
                if(e.num != undefined && e.word != undefined && e.conf != undefined) {
                    Data.push({
                        "num": e.num,
                        "word": e.word,
                        "conf": e.conf
                    })
                }
            })
            res.json(Data);  
        }
	})
}

module.exports = router;
