var express = require('express');
var router = express.Router();

var exampleRouterModule = require("../routersModules/exampleRouterModule");

router.get('/', function (request, response) {
  response.send('root');
});

router.get('/api/:version/:market/:lang/:token', exampleRouterModule.test);

module.exports = router;