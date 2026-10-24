const express = require('express')
const postModel = require('./models/post.model')
const multer = require('multer')

const upload = multer({Storage: multer.memoryStorage()})
const app = express()



app.use(express.json());

app.post("/create-post" , upload.single("image") , async(req , res)=>{

    console.log(req.body)
    console.log(req.file)

    res.status(201).json({
        message: "Post Created Successfully !!!"
    })

})

module.exports = app ;