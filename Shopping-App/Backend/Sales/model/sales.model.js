let mongoose = require("mongoose");
mongoose.Promise = global.Promise;

let SalesSchema = mongoose.Schema({
       uid: String,  
       pid: String,  
       name: String, 
       price: Number,    
       quantity: Number, 
       datePurchased: String   
})
let SalesModel = mongoose.model("sales", SalesSchema, "Sales");

module.exports = SalesModel;