//express
const express = require('express');
const app = express();

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
app.use('/student', studentRoute);

//app listening
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}`));