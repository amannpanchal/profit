const express = require('express');
const app = express();
const mongoose = require('mongoose')
const cors = require('cors');
app.use(express.json())
const model = require('./model')
app.use(cors());
mongoose.connect('mongodb+srv://amanpanchal:amanpanchal@cluster0.2no2ngk.mongodb.net/?retryWrites=true&w=majority').then(() => {
    console.log("the mongodb is connect successfully")
}).catch((e) =>{
    console.log("the error is",e);
})
const PORT = 4000;

app.get('/',(req,res) =>{
    res.send('hello')
    
})


app.post('/getdata', async (req,res)=> {
    try {
    
      console.log('the data is ',req.body);

      req.body?.data.map( async (e) => {
        const newData = await  new model({
            name : e[0],
            details : e[1]
        })
        const response =  await  newData.save();
        console.log(response)
      })
      res.send(req.body)

    }
    catch(e) {
        console.log("the error in this is ",e);
    }

    
})
app.get('/alldata', async (req,res) =>{
    const allData = await model.find().sort({
        timestampField : -1
    }).limit(10)
    res.send(allData)
})
app.listen(PORT,() =>{
    console.log('the app is running successfully');
})