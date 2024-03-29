const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri =process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});

const connection = mongoose.connection;
connection.once('open', ()=> {
    console.log('MongoDB database connection established successfully');
})

const userRouter = require('./routes/users');
const carerRouter = require('./routes/carer');
const parentRouter = require('./routes/parent');

app.use('/users', userRouter);
app.use('/caretakers', carerRouter);
app.use('/parents', parentRouter);

if(process.send.NODE_ENV === 'production') {
    app.use(express.static('../build'));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../client', 'build', 'index.html'));
    });
}

app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
})