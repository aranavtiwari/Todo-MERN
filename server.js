const mongoose = require('mongoose')
const express = require('express')

const app = express()

//Middleware
app.use(express.json())

const db = 'mongodb://localhost/todo'

mongoose
    .connect(db, {
        useCreateIndex: true,
        useUnifiedTopology: true,
        useNewUrlParser: true
    })
    .then(() => console.log('Connected to MongoDB Database...'))
    .catch(err => console.log('Database connection error : '+err))

// Use routes

app.use('/api/todo', require('./routes/todo'))

//Listen to port

if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));
  
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const port = 5000;

app.listen(port, () => {
    console.log('Server is started on Port'+port)
})