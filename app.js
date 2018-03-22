//express
const express = require('express');
const app = express();

//body parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended : true}));

// validator
const validator = require('express-validator');
app.use(validator());

//sessions
var session = require('express-session');
app.use(session({secret: 'krunal', saveUninitialized: false, resave: false}));

//view engine
var exphbs  = require('express-handlebars');
const hbs = exphbs.create( { defaultLayout: 'index', layoutsDir : __dirname + '/views', extname : 'hbs'} );
app.engine('hbs',  hbs.engine);

//views
const path = require('path');
app.set('views', path.join(__dirname,'/views'));
app.set('view engine', 'hbs');

//routes
const studentRoute = require('./routes/student');
const dashboardRoute = require('./routes/dashboard');
app.use('/student', studentRoute);
app.use('/dashboard', dashboardRoute);

//Error handler
app.use(function(error, req, res, next) {    
    res.json({ message: error.message });
  });

//app listening
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}`));