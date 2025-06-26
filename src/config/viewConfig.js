const express = require('express');
const path = require('path');

const viewConfiger = (app) => {

    // cấu hình đường dẫn đến các file trong thư mục view
    // trong set gồm set(key, values), 
    app.set('views', path.join('./src', 'views'));

    // cấu hình các file trong view có đuôi mặt định là ejs
    app.set('view engine', 'ejs');

    // cấu hình cái file tỉnh trong thu mục public
    app.use(express.static(path.join('./src', './public')))
     
    // việc cấu hình ở trên là chỉ những phải tỉnh bên trong public còn việc mình upload vào là đang sử dụng nó nên phải gán đường dẫn trực tiếp vào
    const appdir = path.join('src', 'public', 'poolUpload')
    app.set('uploadir',appdir);

}

module.exports = viewConfiger;