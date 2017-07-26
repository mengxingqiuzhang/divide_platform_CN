var express = require('express');
var router = express.Router();
var upload = require('../../uploads/fileupload');

router.post('/', upload.single('avatar'), function(req, res, next) {
  if(req.file) {
      res.send("<a href='/data'>删除成功 点击返回</a>");
      console.log(req.file);
  }
});

module.exports = router;