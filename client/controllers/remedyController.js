const db = require("../models/index");

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    res.json({sucess: true})
    // db.Remedy
    //   .find(req.query)
    //   .then(dbModel => res.json(dbModel))
    //   .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Remedy
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
//   Find by multiparameter

};
