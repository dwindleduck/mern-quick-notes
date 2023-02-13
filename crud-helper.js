require('dotenv').config();
require('./config/database');

//Require all mongoose modles
const User = require("./models/user")
// const Item = require('./models/item')
// const Category = require('./models/category')
// const Order = require('./models/order')

// Local variables for holding retrieved documents
let user, item, category, order
let users, items, categories, orders