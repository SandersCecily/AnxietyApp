const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/anxietyapp");

const helpSeed = [
  {
    location: ["home", "work", "public"],
    description: "Talk to someone supportive",
    noiselvl: 3,
    physicallvl: 1,
    things_needed: "",
    if_required: false
  }, {
    location: ["home", "work", "public"],
    description: "Talk to yourself",
    noiselvl: 2,
    physicallvl: 1,
    things_needed: "",
    if_required: false
  }, {
    location: ["home", "public"],
    description: "Listen to something. Ex: Podcast, Audiobook, Music",
    noiselvl: 3,
    physicallvl: 1,
    things_needed: "Heaphones, Internet Connection, Device to play sound",
    if_required: false
  }, {
    location: ["home", "work", "public"],
    description: "Try a breathing excercise",
    noiselvl: 1,
    physicallvl: 1,
    things_needed: "Breathing Guide https://dailyburn.com/life/wp-content/uploads/2016/04/circle-gif-2.gif",
    if_required: false
  }, {
    location: ["home", "work", "public"],
    description: "Take a break by going on a walk",
    noiselvl: 2,
    physicallvl: 3,
    things_needed:"",
    if_required: false
  }, {
    location: ["home", "work", "public"],
    description: "Find or make something to drink",
    noiselvl: 1,
    physicallvl: 1,
    things_needed: "Supplies for a drink, money, and/or time",
    if_required: true
  }, {
    location: ["home", "work"],
    description: "Flip a pen through your fingers",
    noiselvl: 1,
    physicallvl: 2,
    things_needed: "Pen",
    if_required: true
  }, {
    location: ["home", "work", "public"],
    description: "Start writing or drawing anything",
    noiselvl: 1,
    physicallvl: 1,
    things_needed: "Pen, paper, or any art supplies",
    if_required: true
  }, {
    location: ["home", "work", "public"],
    description: "Remember: What you're feeling is okay, this is just anxiety, you can get through this",
    noiselvl: 1,
    physicallvl: 1,
    things_needed: "",
    if_required: false
  }, {
    location: ["home"],
    description: "Take a shower, spend extra time on a body part you usually don't. EX: Ears, feet, hands",
    noiselvl: 3,
    physicallvl: 3,
    things_needed: "Shower, Soap",
    if_required: true
  }
];

db.Remedy
  .remove({})
  .then(() => db.Remedy.collection.insertMany(helpSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
