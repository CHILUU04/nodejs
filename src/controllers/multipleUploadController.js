const multipleUploadMiddleware = require('../middleware/multipleUploadMiddleware');

let debug = console.log.bind(console);

let multipleUpload = async(req, res) => {
    try {
        await multipleUploadMiddleware(req, res);
        // Nếu upload thành công, không lỗi thì tất cả các file của bạn sẽ được lưu trong biến req.files
        debug(req.files);

        // thông báo cho client

        if(req.files.length <= 0) {
            return res.send('You must select at leater one file or more');
        }

        return res.send('Your file has been upload');
    }catch(err){
        // Nếu có lỗi thì debug lỗi xem là gì ở đây
        debug(err);

    }
}

module.exports = {
    multipleUpload
};