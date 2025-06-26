const connected = require('../config/database');

const getHome = (req, res) => {
    res.render('home');
}

const getLogin = (req, res) => {
    res.render('login', { error: null });
}

const getUpload = (req, res) => {
    res.render('upload', {error: null});
}

// việc khai báo async là nó sẽ trả về 1 promise
// mà promise nó sẽ chờ cho câu lệnh đó thực thi trong 1 khoảng thời gian , với await nó sẽ chờ
const postLogin = async(req, res) => {
    const userName = req.body.userName;
    const password = req.body.password;

    console.log(req.body)
        // row, và fiels là kết quả của connected.query()
        let[rows, fields] = await connected.query(`
            select * from users where name = ? and password = ?
            `, [userName, password]); //Việc này vừa giúp bạn so sánh đúng với các trường name và password trong database, cách bạn truyền tham số an toàn vào câu truy vấn..
            console.log(rows)
            // console.log(fields)
        // kiểm tra row là mảng các bảng ghi trả về khi thực thi câu lệnh select đó rồi nó sẽ kiểm tra có đúng 1 bẳng ghi nào hay không nếu = 0 thì sai nếu bằng 1 là đúng
        if(rows.length === 1){
             return res.redirect('/');
        }
        // ngược lại nếu không tìm thấy thì sẽ báo lỗi
        else {
            // res.send('Please!. See againt userName or password wrongs');
            return res.render('login', {
                error: 'Please: Username or password error'});
            }
}

const getAccout = (req, res) => {
    res.render('sign', {error: null});
}

const PostAccout = async (req, res) => {
    const{userName, password} = req.body;

    try {
        const[result, fields] =  await connected.query(`
            Insert into users (name, password) values (?, ?)`, [userName, password]);

            if(result.affectedRows === 1) {
                return res.send('Sign Successfull')
            }else {
                return res.render('sign', {error: 'Please. Enter againt'})
            }
            
        }catch(err) {
            res.render(err);
        }
    }


module.exports = {
    getHome, getLogin, postLogin, getUpload, getAccout ,PostAccout
}