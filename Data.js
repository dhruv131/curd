const mongoose=require('mongoose')

mongoose.connect('mongodb://localhost:27017/Shop')

const ProductSch=new mongoose.Schema({
    name:String,
    lastName:String,
    Salary:Number,
    Age:Number,
});

const Insert=async()=>{
    const ProductModel=mongoose.model('emp',ProductSch)

    const data=new ProductModel({
        name:'Moon',
        lastName:'Mittal',
        Salary:30000,
        Age:23,
    })
   const  result=await data.save();
   console.log(result)
}
Insert()


const findData=async()=>{
    const ProductModel=mongoose.model('emp',ProductSch)
     const data=await ProductModel.find()
     console.log(data)
}
findData()

const UpdateData=async()=>{
    const ProductModel=mongoose.model('emp',ProductSch)
     const data=await ProductModel.updateOne(
        {name:'moon'}
        ,{
            $set:{
                age:50000
            }
        }
     )
     console.log(data)
}
UpdateData()

