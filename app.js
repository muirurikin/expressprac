var express = require('express');

var app = express();

app.disable('x-powered-by');

var handlebars = require('express-handlebars').create({defaultLayout:'main'});

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3000);

app.use(express.static(__dirname + '/public'));
 
 app.get('/', function(req, res) {
     res.render('home');
 });

 app.get('/about', function(req, res) {
     res.render('about');
 });

app.use(function(req, res) {
    res.type('text/html');
    res.status(404);
    res.render('404');
});

app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500);
    res. render('500');
});

//Connect to port

 app.listen(app.get('port'), function() {
     console.log('Express app running on http://localhost:' + app.get('port') + ' Press CTRL-C to terminate. ');
 });
