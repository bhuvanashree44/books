const Book=require('../models/booksModel')

const getAllBooks=async(req,res)=>{
    const books=await Book.find()
    res.status(200).json({
        message:"All details of Books are Retrived Successfully",
        data:books
    })
}

const getBooksByID=async(req,res)=>{
    const book=await Book.findById(req.params.id)
    res.status(200).json({
        message:"Book details are Retrived Successfully by ID",
        data:book
    })
}

const addBook=async(req,res)=>{
    const book=await Book.create(req.body)
    res.status(201).json({
        message:"Book details are Added Successfully",
        data:book
    })
}

module.exports={getAllBooks,getBooksByID,addBook}