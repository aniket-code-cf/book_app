import React, { useEffect, useState } from 'react'
import "./Book.css";
import axios from 'axios'
import Book from './Book';

const URL="https://api-book-app-zznr.onrender.com/books"

const fetchHandler=async ()=>
{
   return await axios.get(URL).then((res)=>res.data);
};

const Books = () => {
 
    const [books,setBooks]=useState();
    useEffect(()=>{
        fetchHandler().then((data)=>setBooks(data.books));
    },[]);
    console.log(books);

  return (
    <ul>
        {books && books.map((book,i)=>(
             <li className="book" key={i}>
              <Book book= {book}/ >
             </li>


        ))}
    </ul>
  )
};

export default Books;
