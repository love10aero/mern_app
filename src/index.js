const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();

const { mongoose } = require('./database');

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares (Funciones antes de llegar a las rutas // Functions before reaching to the ROUTES)
app.use(morgan('dev'));
app.use(express.json()); // antes se usaba bodyParser

// Routes
app.use('/api/tasks', require('./routes/task.routes'));

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Starting the Server
app.listen(app.get('port'), ()=>{
    console.log(`Server on port ${app.get('port')}`);
})

