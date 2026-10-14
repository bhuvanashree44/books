const express=require('express')
const BookRoutes=express.Router()
const {getAllBooks,getBooksByID,addBook}=require('../controllers/bookControllers')

BookRoutes.get('/books',getAllBooks)
BookRoutes.get('/books/:id',getBooksByID)
BookRoutes.post('/books',addBook)

module.exports=BookRoutes