var express = require('express');
const eA = require('../middleware/eA');
var router = express.Router();
const Music = require('../model/Music');


/* GET home page. */
router.get('/',eA, function(req, res, next) {


  Music.find({}, (err, musics) => {
    if(err) console.log(err);
    else{
      res.render('index', { title: 'Bosh Sahifa' , musics});
    }
  })


  

});

module.exports = router;
