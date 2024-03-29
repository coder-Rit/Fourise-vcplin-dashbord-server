const mongoose = require('mongoose')
 

const ProductSchema = new mongoose.Schema({

    productName: {
        type: String,
        required: true, 
        
    },
    description: {
        type: String,
    },
    productList:[
        {
            boxDisplayType:{
                type:String,
                required:true,
                enum: ['normal', 'fullsize'],
                default:"normal"
            },
            mediaType:{
                type: String,
                enum: ['video', 'image'],
                required: true, 
            },
            mediaName:{
                type: String,
                required: true, 
            },
            tital:{
                type: String,
                required: true, 
            },
            description:{
                type: String,
                required: true, 
            }

        }
    ]
})
 

module.exports = mongoose.model('Product', ProductSchema)

