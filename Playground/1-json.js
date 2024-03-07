const fs = require('fs')

// const book = {
//     title: "My name is Worker",
//     author: "Saint Worker"
// }
// stringify taken in an object and converts it to a string

// const bookjson = JSON.stringify(book)



// console.log(bookjson)
// 
// fs.writeFileSync('1-json.json',bookjson) // this is how we push the json data to a file in using fs

// json to object conversion can be done using parse option in json

const bookdatabuffer = fs.readFileSync('1-json.json') // this will give us buffer data

const bookdata = bookdatabuffer.toString() // to read that buffer we use json parse to get the readable value
const books = JSON.parse(bookdata)

console.log(books)
const title = "Morning"
const filteredBooks = books.filter((book)=>{
    return book.title != title
})

console.log(filteredBooks)



