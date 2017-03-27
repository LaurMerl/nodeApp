var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use('/', require('./routers/exampleRouter'));

app.use(function (req, res, next) {
  res.status(404).send('404');
});

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('500');
});

app.listen(app.get('port'), function () {
  console.log('Node app is running on port', app.get('port'));
  console.log(process.env.NODE_ENV);
});
