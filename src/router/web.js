const express = require('express');
const router = express.Router();
const {getHome, getCreate, postCreateUser, getLogin, postLoginUser, getFile } = require('../controllers/homeController');
const multerUploadController = require('../controllers/multipleUploadController');

router.get('/', getHome);

router.get('/create', getCreate);

router.post('/createUser', postCreateUser);

router.get('/login', getLogin);

router.post('/loginUser', postLoginUser);

router.get('/uploadFile', getFile);

router.post('/multiple-upload', multerUploadController.multipleUpload)

module.exports = router;