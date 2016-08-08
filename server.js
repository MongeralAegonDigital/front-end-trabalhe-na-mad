var express = require('express');
var app = express();
var path = require('path');

app.set('port', (process.env.PORT || 5000) );
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);
app.set('views', path.resolve(__dirname, 'client', 'views'));
app.use(express.static(path.resolve(__dirname, 'client')));


app.get('/*', function(req, res){
  res.render(__dirname + '/client/views/index.html');
});

app.listen(app.get('port'), function() {
  console.log('SERVER RUNNING... PORT: ' + app.get('port'));
})

