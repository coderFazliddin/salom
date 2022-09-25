const express = require('express');
// const eA = require('../middleware/eA'); bu func. ruyhatdan utganini tek qilishga kere edi fayli middleware papkasini ichida
const Music = require('../model/Music');
const router = express.Router();


               
router.get('/add', function(req, res, next) {
    //            ^ shu yerda eA deb chaqirlgan edi
        res.render("musicadd", { title: "buyurtma qo`shish sahifasi"})

    });

router.post('/add', function(req, res, next) {
    // console.log('Jo`natdik');

    req.checkBody('name', 'iltimos musiqa nomini kiriting').notEmpty()
    req.checkBody('singer', 'iltimos qo`shiqchi ismini kiriting').notEmpty()
    req.checkBody('comment', 'iltimos izoh qoldiring ').notEmpty()

    const errors = req.validationErrors();

    if(errors){
        res.render("musicadd", { title: "mahsulot qo`shish sahifasida hatolik yuz berdi",
        errors: errors
    })

    }
    else{
        const music = new Music();
        music.name = req.body.name;
        music.singer = req.body.singer;
        music.comment = req.body.comment;

        music.save((err) => {
            if(err) console.log(err);
            else{
                req.flash('alert alert-success', "Buyurtma qo`shildi")
                res.redirect('/')
            }
        })
    }


   
})






module.exports = router;
