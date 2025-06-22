const express = require('express');
const app = express();
const router = require('./router/web');
const configViewEngine = require('./config/viewEngine');
const port = 3000;
// convert dữ liệu qua kiểu json, tức là ta dùng dưới dạng object sẽ xử lý dữ liệu dễ dàng hơn
// app.use(express.json()); // khi người dùng gửi dữ liệu dưới dạnh JSON thì middleware này sẽ giúp cho express chuyển từ file JSON thành các object js -> để parse JSON body.
// Cho phép lý dữ liệu từ form method POST
app.use(express.urlencoded({extended: true}));   

configViewEngine(app);
app.use('/', router);


// app.use((req, res) => {
//   res.render('404')
// })

app.listen(port, () => {
  console.log(`Server running: http://localhost:${port}`);
})


