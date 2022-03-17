const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const { PORT, mongoUri } = require('./config');
const someItemsRoutes = require('./routes/api/someItems');
//$env:MONGO_URI='mongodb+srv://admin:Oq42jOf3a2ZLKZg8@cluster0.pvcbu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

app.use(cors());
app.use(morgan('tiny'));
app.use(bodyParser.json());

mongoose
    .connect(mongoUri, err => {
        if(err) throw err;
        console.log('connected to MongoDB')
    });
app.use('/api/someItems', someItemsRoutes);
app.get('/', (req, res) => res.send('HE'));

app.listen(PORT, () => console.log(`App listening at http://localhost:${PORT}`));
