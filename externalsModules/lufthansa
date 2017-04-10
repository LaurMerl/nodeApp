var httpRequestModule = require('../../modules/httpRequestModule');

var dealersModel = function () {

  this.getDealers = function (params, callback) {
    var result = null;
    var postData = '';
    var queryString = '?mkt=' + params.market + '&multibrand=' + params.brand + '&dlr=1&rad=50&func=findmultidealer&address=' + params.address + '&x=&y=&jsonp';

    var options = {
      hostname: 'dealerlocator.fiat.com',
      path: '/geocall/RestServlet' + queryString,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    };

    httpRequestModule.send('https', postData, options, callback);
  };

  this.saveDealer = function (params, callback) {
    var result = null;

    var postData = JSON.stringify({
      configurationID: params.id,
      filters: ""
    });

    var options = {
      hostname: ' ',
      path: '/ProductCatalog.asmx/getConfiguration',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': postData.length
      }
    };

    httpRequestModule.send('https', postData, options, callback);
  };

  this.setDealerAsDefault = function (params, callback) {
    var result = null;

    var postData = JSON.stringify({
      configurationID: params.id,
      filters: ""
    });

    var options = {
      hostname: ' ',
      path: '/ProductCatalog.asmx/getConfiguration',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': postData.length
      }
    };

    httpRequestModule.send('https', postData, options, callback);
  };

  this.deleteDealer = function (params, callback) {
    var result = null;

    var postData = JSON.stringify({
      configurationID: params.id,
      filters: ""
    });

    var options = {
      hostname: ' ',
      path: '/ProductCatalog.asmx/getConfiguration',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': postData.length
      }
    };

    httpRequestModule.send('https', postData, options, callback);
  };

};

module.exports = dealersModel;
