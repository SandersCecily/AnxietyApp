const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const remedySchema = new Schema({
    //id auto gen int pk
    //loction enum (home, public, work) notnull default home
    location: {
        type: Array,
        required: true,
        default: ["home"]
    },
    //description varchar 255 not null
    description: { 
        type: String 
    },
    //noiselvl int (1-5) not null 
    noiselvl: { 
        type: Number, 
        min:1,
        max:5,
        required: true
    },
    //physicallvl int (1-5) not null
    physicallvl: { 
        type: Number, 
        min:1,
        max:5,
        required: true},
    //thingsneeded varchar 255 null 
    things_needed: { 
        type: String 
    },
    //if_required boolean (t/f) nulll
    if_required: { 
        type: Boolean 
    }
});

const Remedy = mongoose.model("Remedy", remedySchema);

module.exports = Remedy;