import { Component } from "react"
import Book from "../components/Book"
import books from  '../assets/books'

function BookList(){
       return <ul>
       {books.map((book, i) => <Book key={i} book={book}/>)}
       </ul>
    }

export default BookList;
