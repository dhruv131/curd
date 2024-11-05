const {MongoClient}=require('mongodb')
const url='mongodb://localhost:27017'
const client =new MongoClient(url)

async function getData(){
    let result= await client.connect()
    let db=result.db('Data')
    return db.collection('Products')
}

// read

const readData=async()=>{
    let data = await getData()
    let read = await data.find().toArray() 
     console.log(read)
}
readData()
  

// insert 

const insertData=async()=>{
    let data = await getData()
    let ins= await data.insertOne({
        name:"Wireless Gaming Mouse",
        company:"64c23350e32f4a51b19b9232",
        price: 129,
        colors: [ '#333333', '#ff9900', '#00cc99' ],
        image: '/images/product-cordless-drill.png',
        category: '64c2342de32f4a51b19b924e',
        isFeatured: true
    })
    console.log(ins)
}
insertData()


// update

const updateData=async()=>{
    let data = await getData()
    let read = await data.updateOne(
        {
          name: 'Fitness Tracker',
        },
        {
            $set:{
                isFeatured: true
            }
        }
    ) 
     console.log(read)
}
updateData()


// delete

const deleteData=async()=>{
    let data = await getData()
    let read = await data.deleteOne({
        price: 129,
    }) 
     console.log(read)
}
deleteData()



  