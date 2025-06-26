const express = require('express');
const app = express();
const viewConfig = require('../src/config/viewConfig');
const router = require('./router/web');
const port = 3000;

// khai báo đường dẫn
viewConfig(app);

// nhận dữ liệu từ form qua POST, sau đó chuyển đối  pause body thành req.body
app.use(express.urlencoded({extended: true}))


app.use(router);

app.listen(port, () => {
    console.log(`This is server web: http://localhost:${port}`);
})