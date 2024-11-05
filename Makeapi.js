const {MongoClient}=require('mongodb')
const url='mongodb://localhost:27017'
const client =new MongoClient(url)
const express=require('express')
const app=express()
app.use(express.json())
async function getData(){
    let result= await client.connect()
    let db=result.db('Data')
    return db.collection('Products')
}

app.get('/',async(_,res)=>{
    let data =await getData()
    let result= await data.find().toArray()
    res.send(result)
})
app.post('/insert',async(req,res)=>{
    let data =await getData()
    console.log(req.body)
    let result= await data.insertOne(req.body)
    res.send(result)
})



app.listen(2700)