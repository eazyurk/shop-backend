const express = require('express');

const user = require('./user/user.routes');

const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        message: 'Api v1'
    });
});

router.use('/user', user);

module.exports = router;