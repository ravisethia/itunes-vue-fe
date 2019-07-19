var express = require('express')
var serveStatic = require('serve-static')
var path = require('path')
var port = process.env.PORT || 5000
var app = express()
app.use(serveStatic(path.join(__dirname, '/docs')))
app.listen(port)
console.log('server started ' + port)
