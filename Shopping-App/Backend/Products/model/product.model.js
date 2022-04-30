let mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const AutoIncrement = require('mongoose-sequence')(mongoose);
let ProductSchema = mongoose.Schema({
    name:String,
    price:Number,
    quantity:Number,
    imageUrl: String
},{ _id: false })
ProductSchema.plugin(AutoIncrement , {id: 'product_id_counter', inc_field: '_id'});
let ProductModel = mongoose.model("product",ProductSchema,"Product")
module.exports = ProductModel;