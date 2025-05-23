const connection = require('../config/database');
const {getAllUsers} = require('../services/CRUDServices');

const gethomepage = async(req, res) => {
    let results = await getAllUsers(); // truyen cơ sở dữ liệu từ founder services
    return res.render('home.ejs', { listUsers: results });
   
}

const getTest = (req, res) => {
    res.send('Check web');
}

const getBone = (req, res) => {
    res.render('sample.ejs');
}

const getCreatePage = (req, res) => {
    res.render('create.ejs');
}

const postCreateUser = async(req, res) => {
    console.log(">>> req.body", req.body);
    let email = req.body.email;
    let name = req.body.myName;
    let city = req.body.city
    // const newLocal = "";
    console.log(">>email = ", email, ">> name = ", name , " >> city = ", city);
    let[results, fields] = await connection.query(
       ` INSERT INTO  User (email, name, city)  values(?, ?, ?)`, [email, name, city],
    );
    res.send('Create user succeed')
}
    


module.exports = {
    gethomepage,
    getTest,
    getBone, 
    postCreateUser,
    getCreatePage
}