let mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const AutoIncrement = require('mongoose-sequence')(mongoose);
let EmployeeSchema = mongoose.Schema({
    _id: Number,
    fname:String,
    lname:String,
    email:String,
    pass:String
})
EmployeeSchema.plugin(AutoIncrement , {id: 'employee_id_counter', inc_field: '_id'});
let EmployeeModel = mongoose.model("employee",EmployeeSchema,"Employee")
module.exports = EmployeeModel;