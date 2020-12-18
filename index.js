const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const userRoutes = require('./server/routes/user.route');



//PORT
const PORT = process.env.PORT || process.env.NODE_PORT || 5000;


//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


//Routes
app.use('/api', userRoutes);


if (process.env.NODE_ENV === 'production') {
    //In case frontend is rendered from nodejs
    app.use(express.static(path.join(__dirname, './client/build')));

    //for all the client requests
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname + './client/build/index.html'));
    });
}


app.listen(PORT, () => console.log(`Server started at PORT : ${PORT}`));