// run 'npm install express' and do a app.listen()
const express = require('express');
const app = express();

// run 'npm install express-react-views react react-dom' and set react-views to be the default view engine
const reactEngine = require('express-react-views').createEngine();

// need to create a views folder to store .jsx files
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', reactEngine);

// run 'npm install method-override' to require and use method-override
const methodOverride = require('method-override');
app.use(methodOverride('_method'));

// run 'npm install body-parser'
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

// use files in public folder
app.use(express.static(__dirname + '/public'));

// require and use install cookie-parser'
const cookieParser = require('cookie-parser');
app.use(cookieParser());

// require db
const db = require('./db');

// require routes
require('./routes')(app, db);


// process.env.PORT || 3000;
// app.listen(PORT, () => console.log('~~~ Tuning in to the waves of port ' + PORT + ' ~~~'));
app.listen(3000, () => console.log('tuning to port 3000'));