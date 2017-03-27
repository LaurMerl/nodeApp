var exampleController = require("../controllers/exampleController");

var exampleRouterModule = function () {
  
  this.test = function (request, response) {
    var params = {
      version: request.params.version,
      market: request.params.market,
      lang: request.params.lang,
      token: request.params.token
    };

    exampleController.test(request, response, params);
  };

};

module.exports = new exampleRouterModule();