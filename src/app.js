const express = require('express')
const uploadFile = require('./services/storage.service')
const multer = require('multer')
const postModel = require('./Models/post.model')

const app = express()

app.use(express.json());

const upload = multer({storage : multer.memoryStorage()})

app.post('/create-post', upload.single('image') ,async (req , res )=>{

    console.log(req.body);
    console.log(req.file);

    const result = await uploadFile (req.file.buffer)
    console.log(result) 

    const post = await postModel.create({
        image : result.url ,
        caption : req.body.caption
    })
        res.status(201).json({
        message : "Post Created Successfully !!!",
         post
    })
}) 

    app.get('/posts', async (req , res)=>{
      
        const posts = await postModel.find()

        return res.status(200).json({
            message : 'Post Fetched Successfully !!!',
            posts
        })

    })

module.exports = app 