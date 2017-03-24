//var mongodb = require('mongodb');

var exampleModel = function () {

  this.test = function (params, callback) {
    callback(params);
  };

};

module.exports = new exampleModel();