var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  console.log(req.session.login_id);
  console.log(req.session.logined);
  if(req.session.logined) {
    res.render('index', { title: 'Express', uid: req.session.uid, login_id: req.session.login_id });
  } else {
    res.render('index', { title: 'Express', login_id: '' });
  }
});

module.exports = router;
