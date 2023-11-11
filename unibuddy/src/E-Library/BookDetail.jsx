// BookDetail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { collection, doc, getDoc } from 'firebase/firestore';
import { firestore } from "../Firebase/Firebase";
import './BookDetail.css';

const BookDetail = () => {
  const { bookId } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBookDetails = async () => {
      const bookDocRef = doc(firestore, 'books', bookId);
      const bookDoc = await getDoc(bookDocRef);
      if (bookDoc.exists()) {
        setBook({
          id: bookDoc.id,
          ...bookDoc.data(),
        });
      } else {
        // Id not found case
      }
    };

    fetchBookDetails();
  }, [bookId]);

  if (!book) {
    // Book deatil not fetched case
    return <div className='Loading'>Loading...</div>;
  }

  return (
    <div className='bookDetail'>
      <h1>{book.title}</h1>
      <p>{book.author}</p>
      <p>{book.year}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default BookDetail;
