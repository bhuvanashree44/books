const mongoose=require('mongoose')

const bookSchema=new mongoose.Schema({
    title:String,
    author:String
})

const Book=mongoose.model('bookLists',bookSchema)

module.exports=Book