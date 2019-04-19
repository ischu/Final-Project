const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// images are a big bucket of worms with Mongo
//   for now the idea is that the String will be a path to the image.
//   But, there are alternative ways of doing this as binary data
var PicSchema = new Schema({
    title: String,
    createdAt: Date,
    img: Buffer
});
var VisitSchema = new Schema({
    employee: String,
    type: String,
    day: [{ ofWeek: String, date: Number }],
    // morning-noon-evening-night
    timeBlock: String,
    creratedAt: Date,
});
// for creating new Pet
var PetSchema = new Schema({
    name: String,
    breed: String,
    age: Number,
    pic: [PicSchema],
    createdAt: Date
});
// for storing client info
var ClientSchema = new Schema({
    name: String,
    phone: Number,
    email: String,
    address: String,
    pet: [PetSchema],
    schedule: [VisitSchema],
    emergencyContact: {
        name: String,
        phone: Number,
        email: String,
        address: String,
        relation: String
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
},
    { collection: "Clients" });
var Client = mongoose.model('Client', ClientSchema);

// for now, only clients will be exported. 
//   However, exporting pets as their own documents may be necessary at some future date

module.exports = Client;