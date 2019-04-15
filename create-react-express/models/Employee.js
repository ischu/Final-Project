const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// // function creates Schema base- the "class" to be "extended"
// function BaseSchema() {
//   // "arguments" will add new parameters to schema
//   Schema.apply(this, arguments);
//   // these parameters are common to all Schemas
//   this.add({
//     name: String,
//     phone: Number,
//     email: String,
//     address: String,
//     createdAt: Date
//   });
// }
// util.inherits(BaseSchema, Schema);

// var PersonSchema = new BaseSchema();
// var ManagerSchema = new BaseSchema({ area: String });

// var Person = mongoose.model('Person', PersonSchema);
// var Manager = Person.discriminator('Manager', ManagerSchema);
// new Manager().__t; // "Manager". `__t` is the default `discriminatorKey`

// var employeeSchema = new Schema({ Manager: ObjectId });
// var Employee = Person.discriminator('Employee', employeeSchema, 'staff');
// new Employee().__t; // "staff" because of 3rd argument above

var EmployeeSchema = new Schema({
  name: String,
  phone: Number,
  email: String,
  address: String,
  createdAt: Date
},
{collection: "Employees"});

var Employee = mongoose.model('Employee', EmployeeSchema);

// TODO - implement manager accounts
module.exports = Employee;
