const connected = require('../config/database'); 

const getHome = (req, res) => {
    res.render('home')
} 

const getCreate = (req, res) => {
    res.render('create')   
}

const postCreateUser = async(req, res) => {
    let name = req.body.name;
    let pass = req.body.pass;
    // console.log('name', name, 'pass', pass);
    let[row] = await connected.query(`
        insert into admin (name, pass) values (?, ?) `,[name, pass]
    );
    res.send('thành công');
}

const getLogin = (req, res) => {
    res.render('login');
}

const postLoginUser = async(req, res) => {
    let {name, pass} = req.body;
    let [row] = await connected.query (`
        select * from admin where name = ? AND pass = ?`, [name, pass]);
    res.send('Đăng nhập thành công');
}

const getFile = (req, res) => {
    res.render('upload');
}



module.exports = {
    getHome, getCreate, postCreateUser, getLogin, postLoginUser, getFile
}