const express = require('express');
const path = require('path');

//  set ở đây nghĩa là “đặt” (set) một giá trị cấu hình cho ứng dụng Express, 
const configViewEngine = (app) => {
    app.set('views', path.join('./src' , 'views'));
    // → Dùng để “nói” với Express: thư mục chứa tất cả các file template (views) của bạn nằm ở ./src/views.
    // path.join(...) chỉ là cách nối hai (hoặc nhiều) phần đường dẫn cho đúng chuẩn hệ điều hành.
    app.set('view engine', 'ejs');
//  Chọn luôn “EJS” làm template engine mặc định.

    app.use(express.static(path.join('./src', '/public' )))
    //Mục đích: Cho phép Express phục vụ trực tiếp các file tĩnh (static files) như CSS, JavaScript client-side, hình ảnh, font, v.v.
     // Đặt biến upload_dir trỏ đến thư mục bạn muốn multer lưu file
      const uploadPath = path.join('src', 'public', 'uploadResult');
     app.set('upload_dir', uploadPath);
}

module.exports = configViewEngine;
// xuat hàm để import vào các file cần dùng