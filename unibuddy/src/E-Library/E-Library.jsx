import React, {useState, useEffect} from "react";
import { Link, Route, Routes } from "react-router-dom";
import './E-Library.css';
import { collection, getDocs } from 'firebase/firestore';
import { db, firestore } from "../Firebase/Firebase";
import BookDetail from "./BookDetail";
import { books } from "./libraryData";

const E_Library = (props) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const bookCollection = collection(firestore, 'books');
      const booksSnapshot = await getDocs(bookCollection);
      const bookData = booksSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setBooks(bookData);
    };

    fetchBooks();
  }, []);

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