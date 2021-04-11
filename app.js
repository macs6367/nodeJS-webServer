require('dotenv').config();
const express = require('express')
const hbs = require('hbs');

const app = express(); 
const port = process.env.PORT; 

//Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials')

// servir contenido estatico
app.use(express.static('public'));

/*app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Miguel Castrillón',
        titulo: 'Curso de Node'
    });
});

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Miguel Castrillón',
        titulo: 'Curso de Node'
    });
});

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Miguel Castrillón',
        titulo: 'Curso de Node'
    });
});
*/
app.get('*', function (req, res) {
    res.sendFile(__dirname + '/public/404.html');
});

app.listen(port)