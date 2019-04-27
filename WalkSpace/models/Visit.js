const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const VisitSchema = new Schema({
    client: {type: Schema.Types.ObjectId, ref:"Client" },
    employee: {type: Schema.Types.ObjectId, ref:"Client" },
    type: String,
    day: { ofWeek: Number, date: Date },
    // morning=0, noon=1, evening=2, night=3
    timeBlock: Number,
    createdAt: {type:Date, default:Date()},
},
{collection: "Visits"});

var Visit = mongoose.model('Visit', VisitSchema);
module.exports = Visit;