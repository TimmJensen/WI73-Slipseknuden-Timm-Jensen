// load the things we need
const express    = require('express')
const app        = express();
const path       = require('path');
const session    = require('express-session');
const bodyParser = require("body-parser");
// require("./config/db_config");

const port = process.env.PORT || 8080;

app.set('port', port);
app.set('views', __dirname + '/views');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session({
	secret: 'keyboard cat',
	resave: false,
	saveUninitialized: true,
	cookie: { maxAge: 5 * 60 * 1000 } // 5 minutter
}));

// Serving files from the folder 'Public'
app.use(express.static('public'))

// sets the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file
app.get('/', function (req, res) {
	res.render('pages/index');
});

app.get('/produkter', function (req, res) {
	res.render('pages/produkter');
})

app.get('/om-os', function (req, res) {
	res.render('pages/om-os');
});

app.get('/garanti', function (req, res) {
	res.render('pages/garanti');
})
// require("./routes/routes") (app);


app.listen(port);
console.log(`Express server started http://localhost:${port}/`);
