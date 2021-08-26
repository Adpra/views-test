const mongoose = require('mongoose');

const Schema = mongoose.Schema;


 
    const fabelioPost = new Schema({
        title:{
            type: String,
           
        },
        price:{
            type: String,
            
        },
        description:{
            type: String,
            
        },
        imagesrc: {
            type: String,
           
        },
        
    },{
        timestamps:true
    })
 

    module.exports = mongoose.model('fabelioPost',fabelioPost);