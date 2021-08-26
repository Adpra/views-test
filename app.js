const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');
require('dotenv').config();



const app = express();

const fabelioRoutes = require('./src/routes/fabelio');



// const fileStorage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, 'images');
//     },
//     filename: (req, file, cb) => {
//         cb(null, new Date().getTime() + '-' +file.originalname)
//     }
// })

// const fileFilter = (req, file, cb) => {
//     if(file.mimetype === 'image/png' || file.mimetype === 'image/jpg'  || file.mimetype === 'image/jpeg'){
//         cb(null, true)
//     }else{
//         cb(null, false)
//     }
// }

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.set('view engine', 'ejs')

// app.use('/images', express.static(path.join(__dirname, 'images')));
// app.use(multer({storage: fileStorage, fileFilter : fileFilter}).single('image'));


app.use((req, res, next) => {
    res.setHeader('Access-control-Allow-Origin', '*');
    res.setHeader('Access-control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
    next();
})




app.use('/fabelio', fabelioRoutes)





mongoose.connect('mongodb+srv://adipra:5z90GNyFctQNBErW@server.wynj2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology:true})
.then(() => {

    app.listen(process.env.PORT || 4001, () => console.log('connect succes'));
})
.catch(err => console.log(err))

