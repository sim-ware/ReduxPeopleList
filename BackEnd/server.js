const express = require('express');
const app = express();
var routes = require('./routes')

app.use('/api', routes);

// app.get('/names/all', function (req, res) {
//  return res.send('Hello World');
// });
//
// app.get('/mars', function (req, res) {
//  return res.send('Hello Mars');
// });

app.listen(process.env.PORT || 8080);
