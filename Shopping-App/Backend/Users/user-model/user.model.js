let mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const AutoIncrement = require('mongoose-sequence')(mongoose);
let UserSchema = mongoose.Schema({
    _id: Number,
    fname:String,
    lname:String,
    email:String,
    pass:String,
    dob:Date,
    phone:Number,
    address:String,
    funds:Number,
    locked:Boolean
})
UserSchema.plugin(AutoIncrement , {id: 'user_id_counter', inc_field: '_id'});
let UserModel = mongoose.model("user",UserSchema,"User");

module.exports = UserModel;