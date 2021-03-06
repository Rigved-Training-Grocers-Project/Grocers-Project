//required modules
let express = require('express')
let app = express();
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let cors = require('cors');

let url = 'mongodb://localhost:27017/myapp';

app.use(bodyParser.urlencoded({ extended: true })); // enable body part data
app.use(bodyParser.json()); 
app.use(cors()); 

const mongooseDbOption = {
  // to avoid warning
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex:true,
  useFindAndModify:false
};
mongoose.connect(url, mongooseDbOption);

mongoose.connection;

var Users = require('./Users/router/user.router.js');
var Product = require('./Products/router/product.router.js');
var Employee = require('./Employees/router/emp.router.js');
var Admin = require('./Admin/router/admin.router.js');
var Request = require('./Requests/router/requests.router.js');
var Order = require('./Orders/router/orders.router.js');
var Sales = require("./Sales/router/sales.router.js");

app.use('/product', Product);
app.use('/', Users);
app.use('/emp', Employee);
app.use('/admin', Admin);
app.use('/request', Request);
app.use('/order', Order);
app.use('/sales', Sales);

app.listen(3001, () => console.log('Server is running on port number 3001'));