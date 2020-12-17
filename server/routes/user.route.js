const express = require('express');
const router = express.Router();
const { getUserDetails, addUserDetails } = require('../controllers/user.controller');
const { getBuildTime, checkBuildDate } = require('../middlewares/helper');

router.get('/user',getBuildTime ,checkBuildDate ,getUserDetails);

router.post('/add-user',getBuildTime ,checkBuildDate, addUserDetails);


module.exports = router;