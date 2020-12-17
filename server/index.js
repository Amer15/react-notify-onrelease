const express = require('express');
const app = express();
const userRoutes = require('./routes/user.route');


//PORT
const PORT = process.env.NODE_PORT || 5000;


//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// const metaData = path.join(__dirname + '../../client/public/meta.json');


app.use('/api', userRoutes);


app.listen(PORT, () => console.log(`Server started at PORT : ${PORT}`));