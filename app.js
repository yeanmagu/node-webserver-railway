require('dotenv').config();
const express = require('express');
const hbs = require('hbs');

const app = express();
const port = process.env.PORT;

// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

/* hbs.registerPartials(path.join(__dirname, "../", "/views/partials"));
app.use(express.static(path.join(__dirname, "../", "/public"))); */

// servir contenido estatico
app.use(express.static('public'));

app.get('/hola-mundo', (req, res) => {
    res.send('Hola Mundo en su respectiva ruta');
});
app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Yeiner Martinez',
        titulo: 'Curso de nodeJS'
    });
});

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Yeiner Martinez',
        titulo: 'Curso de nodeJS'
    });
});

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Yeiner Martinez',
        titulo: 'Curso de nodeJS'
    });
});

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html');
});

app.listen(port, () => {
    console.log(`Runing app at http://localhost:${port}`);
});