const express = require('express');
const app = express();
const configViewEngine = require('./config/viewsEngine');
const webRoutes = require('./routes/web');
const connection = require('./config/database')
const port = 3000;

app.use(express.json()); // for json
app.use(express.urlencoded({extended: true})); // for data
// config temple engine
configViewEngine(app);

// khai bao router
app.use('/', webRoutes) // giup tao vaf phan viet giua cac route trong web site





app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
