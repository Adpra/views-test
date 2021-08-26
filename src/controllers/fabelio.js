const axios = require('axios');
const cheerio = require('cheerio');
const { text } = require('cheerio/lib/static');
// const download = require('node-image-downloader');
const fabelioPost = require('../models/fabelio');


// https://fabelio.com/ip/kursi-kantor-cheeko

exports.createData = (req, res, next) => {

    const {search}  = req.body;
    
  
    console.log('jojo',search);

    console.log(typeof search);
    

axios.get(search)
.then((response) => {
  

    const $ = cheerio.load(response.data);
    const title = $('h1').text();
    const description = $('ul.pord-dimension-list, li').text();
    const price = $('div.text-16.font-600').text();
    const imagesrc = $('img#product-image').attr('src');
   
    
    // const options = {
    //     url: imagesrc,
    //     dest: './images',    // will be saved to /path/to/dest/image.jpg
    //     // extractFilename: false                
    //   }
      
    //  download.image(options)
    //     const iamge = option.url
    //     .then(({ filename }) => {
    //         console.log('name',filename);
    //       console.log('Saved to', filename)  // saved to /path/to/dest/image.jpg
         
    //     })
    //     .catch((err) => console.error(err))
        

    
     
    
    
    //download image
    const posting = new fabelioPost({
        title : title,
        price : price,
        description: description,
        imagesrc: imagesrc
    }) 
 
 
    // res.status(201).json(posting)
   

   posting.save()
   .then((result) => {
    res.status(201).json({
        message: "Create Succes",
        data: result
    })
})
.catch((error) => {
    console.log('error',error);
})
   
})
.catch((err) => {
    console.log(err);
})



}


exports.getAllData = (req,res,next) => {

    fabelioPost.find()
    .then(result => {
            res.status(200).json({
                message: "Get All Data Success",
                data: result
            });
        })
    .catch((err) => {
        console.log(err);
    })
}

exports.getById = (req, res, next) => {
    const id = req.params.id;
    fabelioPost.findById(id)
    .then(result => {
        if(!result) {
            const error = new Error('Id not found')
            error.errorStatus = 404;
            throw error;
        }else{
            res.status(202).json({
                message: "Get Id Success",
                data: result
            })
        }
        
    }).catch((err) => {
        console.log(err);
    })
}