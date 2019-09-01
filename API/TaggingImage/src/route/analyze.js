var express = require('express');
var router = express.Router();

router.get('/test', function (req, res) {
    res.json({
        message:"This is article api"
    });
});

//routerをモジュールとして扱う準備
module.exports = router;