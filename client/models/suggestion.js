const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const suggestSchema = new Schema({
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
        required: true,
        default: 3
    },
    //physicallvl int (1-5) not null
    physicallvl: { 
        type: Number, 
        min:1,
        max:5,
        required: true,
        default: 3
    },
    //thingsneeded varchar 255 null 
    things_needed: { 
        type: String 
    },
    //if_required boolean (t/f) nulll
    if_required: { 
        type: Boolean 
    },
    //accepted boolean (t/f) default false
    accepted: {
        type:Boolean,
        default: false,
    }
});

const Suggest = mongoose.model("Suggest", suggestSchema);

module.exports = Suggest;