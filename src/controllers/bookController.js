const { count } = require("console")
const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")

const createBook= async function (req, res) {
    let book = req.body
    let author_Id=req.body.authorId
    let authorRequest = await authorModel.findById(author_Id)
    if(authorRequest){
        let bookCreated = await bookModel.create(book)
        res.send({data: bookCreated})

    }
    else{
        res.send({msg :"author Id is not valid"})
    }
} 


const getBooksData= async function (req, res) {
    let books = await bookModel.find().populate('author')
    res.send({data: books})
}

const getBooksWithAuthorDetails = async function (req, res) {
    let specificBook = await bookModel.find().populate('author_Id')
    res.send({data: specificBook})

}

module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
