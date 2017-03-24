var exampleModel = require('../models/exampleModel');

var exampleController = function () {

  this.test = function (req, res, params) {

    var callback = function (result) {
      res.status(200).send(JSON.stringify(result));
    };

    exampleModel.test(params, callback);
  };

};

module.exports = new exampleController();