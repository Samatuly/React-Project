// BookDetail.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  updateDoc,
  query,
  where,
} from "firebase/firestore";
import { firestore } from "../Firebase/Firebase";
import "./BookDetail.css";
import { useAuthDetails } from "../Login/useAuthDetailsHook";
import { update } from "firebase/database";

const BookDetail = () => {
  const { bookId } = useParams();
  const [book, setBook] = useState(null);
  const { authUser, userSignOut } = useAuthDetails();

  useEffect(() => {
    const fetchBookDetails = async () => {
      const bookDocRef = doc(firestore, "books", bookId);
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
    return <div className="Loading">Loading...</div>;
  }
  const addToFavorites = async (bookId, bookName) => {
    try {
      const userCollection = collection(firestore, "users");
      const userQuery = query(
        userCollection,
        where("userId", "==", authUser.uid)
      );
      const userQuerySnapshot = await getDocs(userQuery);
      if (!userQuerySnapshot.empty) {
        const userDoc = userQuerySnapshot.docs[0];
        const userFavorites = userDoc.data().favoriteBooks || [];
        if (userFavorites.includes(bookName)) {
          console.log("User already favorites this book");
        } else {
          const updatedFavorites = [...userFavorites, bookName];
          const updDocRef = doc(userCollection, userDoc.id);
          await updateDoc(updDocRef, { favoriteBooks: updatedFavorites });

          // add userId to book db also
          const bookRef = doc(firestore, "books", bookId);
          const bookSnap = await getDoc(bookRef);
          if (!bookSnap.empty) {
            await updateDoc(bookRef, {
              whoTook: [...bookSnap.data().whoTook, authUser.uid],
            });
          }
          console.log("Book successfully added to favorites");
        }
      } else {
        console.log("User not found with the specified UID.");
      }
    } catch (err) {
      console.error("Error updating favorites: ", err.message);
    }
  };
  return (
    <div className="bookDetail">
      <img src={book.image}></img>
      <h1>{book.title}</h1>
      <p>{book.author}</p>
      <p>{book.year}</p>
      <button
        className="book-detail-favorite"
        onClick={() => addToFavorites(book.id, book.title)}
      >
        Add to favorites
      </button>
      {/* Add more details as needed */}
    </div>
  );
};

export default BookDetail;
