const uploadFileMiddleware = require('../middleware/uploadFileMiddleware');

const mutipleUpload = async(req, res) => {
    try {
        await uploadFileMiddleware(req, res)

        if(!req.files || req.files.length === 0) {
            return res.render('upload', {error: 'please: choiec one file or more'})
        }
        return res.send('Upload succesfully!!!!');
    }catch(err){
        console.error(err);
    }
}

module.exports = {mutipleUpload}