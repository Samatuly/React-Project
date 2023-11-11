import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './E-Library.css';
import { collection, getDocs } from 'firebase/firestore';
import { db, firestore } from "../Firebase/Firebase";
import BookDetail from "./BookDetail";
import { books } from "./libraryData";

const E_Library = (props) => {
  const [booksData, setBooksData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchBooks = async () => {
      const bookCollection = collection(firestore, 'books');
      const booksSnapshot = await getDocs(bookCollection);
      const bookData = booksSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setBooksData(bookData);
    };

    fetchBooks();
  }, []);

  return (
    <div className="library">
      <input
        className="library-search"
        type="text"
        placeholder="Search by book title or author"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <div>
        <button className="library-button filter">All</button>
        <button className="library-button filter">Favourites</button>
      </div>
      <div className="library-list">
        {booksData
          .filter((book) => {
            const searchTerms = searchQuery.toLowerCase().split(' ');
            return searchTerms.every((term) =>
              book.title.toLowerCase().includes(term) ||
              book.author.toLowerCase().includes(term)
            );
          })
          .map((book) => (
            <div key={book.id} className="book">
              <Link to={`/e_library/${book.id}`}>
                <img src={book.image} alt={book.title} />
                <h2>{book.title}</h2>
              </Link>
              <p>{book.author}</p>
              <p>{book.year}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default E_Library;
