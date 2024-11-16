const express = require('express')
const mongoose = require('mongoose')
const userRoute = require('./Route/UserRoute')
const cors = require('cors')
require ("dotenv").config()

const app = express()
const port = process.env.port || 2040

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/abc", userRoute)

mongoose.connect(process.env.mongodburl)
    .then(()=>{
        console.log('connected to mongodb', process.env.mongodburl)

    }) 
    .catch((error)=>{
        console.log('error connecting to mongodb', error)
    })

    app.get('/findAll', async(req,res)=>{
        const mybooks = await model.find()
        if(!mybooks){
            return res.status(404).json({error:"record not found"})
        }
        res.status(200).json(mybooks)
    })

    app.get('/getOne/:id', async(req,res)=>{
        const {id} = req.params
        const mybooks = await model.findById(id)
        if(!mybooks){
            return res.status(404).json({error:"record not found"})
        }
        res.status(200).json(mybooks)
    })

    app.get('/deleteOne/:id', async(req,res)=>{
        const {id} = req.params
        const mybooks = await model.findByIdAndDelete(id)
        if(!mybooks){
            return res.status(404).json({error:"record not found"})
        }
        res.status(200).json(mybooks)
    })

    app.get('/getbytitle/:ptitle', async(req,res)=>{
        const {ptitle} = req.params
        const mybooks = await model.findOne({title:ptitle})
        if(!mybooks){
            return res.status(404).json({error:"record not found"})
        }
        res.status(200).json(mybooks)
    })

app.listen(port,()=>{
    console.log(`database connected on port ${port}`)
})
  
