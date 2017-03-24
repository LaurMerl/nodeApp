var express = require('express');
var router = express.Router();

/**
 * Controllers
 */
var exampleController = require("../controllers/exampleController");

router.get('/', function (request, response) {
  response.send('root');
});

router.get('/api/:version/:market/:lang/:token', function (request, response) {
  var params = {
    version: request.params.version,
    market: request.params.market,
    lang: request.params.lang,
    token: request.params.token
  };

  exampleController.test(request, response, params);
});

module.exports = router;