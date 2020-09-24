const express = require('express');
const User = require('./user.model');

const router = express.Router();

router.get('/', async(req, res) => {
    const users = await User
    .query()
    .select(`address`, `city`, `country`, `email`, `first_name`, `house_number`, `last_name`, `password`, `state`, `user_id`, `username`);

    res.json(users);
});

module.exports = router;