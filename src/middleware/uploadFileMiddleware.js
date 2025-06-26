const multer = require('multer');
const util = require('util');

const storage = multer.diskStorage({
    // cấu hình đường dẫn file
    destination: (req, file, callback) => {
        let upDirt = req.app.get('uploadir');
        callback(null, upDirt);
    },
    
    // đặt tên file
    filename: (req, file, callback) => {
        let fileName = `${Date.now()}+minhchi+${file.originalname}`;
        callback(null, fileName);
    }

})


const multer_file = multer({storage: storage}).array('files', 10);

const multiple_file = util.promisify(multer_file);

module.exports = multiple_file