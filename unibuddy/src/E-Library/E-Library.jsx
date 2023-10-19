import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import './E-Library.css';
import BookDetail from "./BookDetail";

const E_Library = (props) => {
  const books = [
    { id: 1, title: 'Book 1', author: 'Author 1', year: 2021, image: 'book1.jpg' },
    { id: 2, title: 'Book 2', author: 'Author 2', year: 2022, image: 'book2.jpg' },
    { id: 3, title: 'Book 3', author: 'Author 3', year: 2020, image: 'book3.jpg' },
    { id: 4, title: 'Book 4', author: 'Author 1', year: 2021, image: 'book1.jpg' },
    { id: 5, title: 'Book 5', author: 'Author 2', year: 2022, image: 'book2.jpg' },
    { id: 6, title: 'Book 6', author: 'Author 3', year: 2020, image: 'book3.jpg' },
    { id: 1, title: 'Book 7', author: 'Author 1', year: 2021, image: 'book1.jpg' },
    { id: 2, title: 'Book 8', author: 'Author 2', year: 2022, image: 'book2.jpg' }
  ];
  
    return (
      <div className="library">
        {books.map((book) => (
          <div key={book.id} className="book">
            <img src={book.image} alt={book.title} />
            <Link to={`/e_library/${book.id}`}><h2>{book.title}</h2></Link>
            <p>{book.author}</p>
            <p>{book.year}</p>
          </div>
        ))}
      </div>
    );
  };

export default E_Library;