var http = require('http');
var https = require('https');

var httpRequestModule = function () {
  var self = this;

  this.send = function (protocol, data, options, callback) {

    if (protocol === 'http') {
      protocol = http;
    } else if (protocol === 'https') {
      protocol = https;
    }

    var req = protocol.request(options, (res) => {
      res.setEncoding('utf8');
      var buffer = '';
      res.on('data', (chunk) => {
        buffer += chunk;
      });
      res.on('end', () => {
        callback(buffer);
      });
    });

    req.on('error', (e) => {
      console.error(e);
    });
    req.write(data);
    req.end();
  };

  this.sendMutex = function (protocol, data, options, params, mutex, response) {
    self.send(protocol, data, options, function (buffer) {
      if (response) {
        response.buffer = buffer;
      } else {
        response = buffer;
      }
      mutex.taskComplete(params.mutexResultName, response);
    });
  };

  this.postJson = function (data, options, callback) {
    var protocol = options.protocol || 'https:';
    protocol = protocol.replace(':', '');

    var options = {

      host: options.host,
      path: options.path,
      port: options.port || '443',
      method: 'POST',
      headers: options.headers || {
        'Content-Type': 'application/json',
        'Content-Length': data.length
      }
    };

    self.send(protocol, data, options, callback);
  };

};

module.exports = new httpRequestModule();
