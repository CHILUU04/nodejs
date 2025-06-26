// với router là bộ định tuyến nó thực thi ở file theo nhiều modulm riêng biệt
//Tóm lại, router.get() cũng giống app.get(), chỉ khác ở chỗ nó gói route trong một module (router) để bạn tổ chức code gọn gàng hơn
const express = require('express');
const router = express.Router()
const {getHome, getLogin, postLogin, getUpload, getAccout, PostAccout} = require('../controllers/homeController');
const uploadFileController = require('../controllers/UploadControler');


// cấu hình đường dẫn 
// với get thì sẽ lắng nghe các get request vào đường dẫn path khi nó khớp thì sẽ trả vào callback(req, res)
router.get('/', getHome);

router.get('/login', getLogin);

router.post('/login', postLogin);

router.get('/sign', getAccout);
//dùng post: lắng nghe các post request tức cái request đó có kèm dữ liệu  trong body nó chạy và trả về(respone) cho người dùng 
router.post('/sign', PostAccout);

router.get('/upload', getUpload);

router.post('/upload', uploadFileController.mutipleUpload);


// xuất giá trị ra bên ngoài module cho phép các các file có thể import mà sử dụng nó

module.exports = router;