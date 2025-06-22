const util = require('util');
const multer = require('multer');


// khoi tạo biến cấu hình luu trữ

let storage = multer.diskStorage({
    destination: (req, file, callback) => {
        const uploadDir = req.app.get('upload_dir')
        callback(null, uploadDir);
    },
    
    filename: (req, file, callback) => {
        let filename = `${Date.now()}-minhchi-${file.originalname}`;
        callback(null, filename);
    }
})
 
// khởi tạo middleware bên trên
let uploadManyFile = multer({storage: storage}).array('files', 17);

// Mục đích của util.promisify() là để bên controller có thể dùng async-await để gọi tới middleware này
let multipleUploadMiddleware = util.promisify(uploadManyFile);

module.exports = multipleUploadMiddleware;