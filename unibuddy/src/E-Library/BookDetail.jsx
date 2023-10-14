import React from 'react';
import { useParams, find } from 'react-router-dom';
import books from './E-Library';

const BookDetail = () => {
  const { id } = useParams();
  const book = books.find((book) => book.id === parseInt(id));

  if (!book) return <div>Book not found.</div>;

  return (
    <div>
      <h2>Book Details</h2>
      <h3>{book.title}</h3>
      <p>Author: {book.author}</p>
      <p>Description: {book.year}</p>
    </div>
  );
}

export default BookDetail;