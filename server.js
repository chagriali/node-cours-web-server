const express = require('express');
const hbs = require('hbs');

const port = process.env.PORT || 3005
var app = express();
app.set('view engine','hbs');

hbs.registerPartials(__dirname + '/views/partials');
app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getYear',()=>{
  return new Date().getFullYear();
});

app.use((req,res,next) => {
    console.log(req.method);
    next();
});

app.use((req,res,next) => {
  res.render('maintenance.hbs')
});


app.get('/',(req,res) => {
  res.render('home.hbs',{
    Title: 'Home Page',
    welcome: 'Welcome to our site'
  })
});




app.get('/bad',(req, res) => {
  res.send({
    errorMessage : 'Error'
  })
})


app.listen(port);
