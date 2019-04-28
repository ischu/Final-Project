const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const VisitSchema = new Schema({
    // client and employee fields are populated on get
    client: {type: Schema.Types.ObjectId, ref:"Client" },
    employee: {type: Schema.Types.ObjectId, ref:"Client" },
    type: String,
    day: { ofWeek: Number, date: Date },
    // morning=0, noon=1, evening=2, night=3
    timeBlock: Number,
    createdAt: {type:Date, default:Date()},
    arrive: {
        status:{
            type: Boolean,
            default: false
        },
        timestamp: {
            type: Date,
            default: null
        }
    },
    complete: {
        status:{
            type: Boolean,
            default: false
        },
        timestamp: {
            type: Date,
            default: null
        }
    },
    cancel: {
        status:{
            type: Boolean,
            default: false
        },
        timestamp: {
            type: Date,
            default: null
        }
    }
},
{collection: "Visits"});

var Visit = mongoose.model('Visit', VisitSchema);
module.exports = Visit;