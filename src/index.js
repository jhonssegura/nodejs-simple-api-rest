const express = require('express');
const app = express();
const morgan = require('morgan');

// Settings
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2)

// Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
// app.use(morgan('combined')); // Da mayor detalle sobre la petición realizada

// Routes
app.use(require('./routes/index'));
app.use(require('./routes/movies'));

// Starting the server
app.listen(3000, () =>{
    console.log(`Server on port ${app.get('port')}`);
})