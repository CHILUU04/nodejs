const express = require('express');
const {gethomepage, getTest, getBone, postCreateUser, getCreatePage} = require('../controllers/homeController');
const router = express.Router();

router.get('/', gethomepage); 

router.get('/news', getTest);

router.get('/page', getBone);

router.get('/create', getCreatePage);

router.post('/create-user', postCreateUser);


module.exports = router;