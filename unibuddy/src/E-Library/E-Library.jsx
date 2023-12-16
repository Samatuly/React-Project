import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./E-Library.css";
import { collection, getDocs } from "firebase/firestore";
import { db, firestore } from "../Firebase/Firebase";
import BookDetail from "./BookDetail";
import { books } from "./libraryData";
import { useAuthDetails } from "../Login/useAuthDetailsHook";

const E_Library = (props) => {
  const [booksData, setBooksData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilterButton, setActiveFilterButton] = useState("all");
  const { authUser, userSignOut } = useAuthDetails();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchBooks = async () => {
      //creating new worker
      const worker = new Worker(
        new URL("./bookFetch.worker.js", import.meta.url)
      );

      //Listen for messages in worker
      worker.onmessage = (event) => {
        const { success, data, error } = event.data;
        if (success) {
          console.log(data);
          setBooksData(data);
          setLoading(false);
        } else {
          console.error("Error fetching data:", error);
          setLoading(false);
        }
        worker.terminate();
      };
      // Send data to the worker
      worker.postMessage({ collection: "books" });
    };

    fetchBooks();
  }, []);
  const filterBooks = () => {
    if (activeFilterButton === "all") {
      return booksData;
    } else if (activeFilterButton === "favorite") {
      // Assuming you have a user ID, and organizations have a "members" field
      return booksData?.filter((book) => book.whoTook.includes(authUser.uid));
    }
  };
  const handleButtonClick = (buttonType) => {
    setActiveFilterButton(buttonType);
  };
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
        <button
          className="library-button filter"
          onClick={() => handleButtonClick("all")}
        >
          All
        </button>
        <button
          className="library-button filter"
          onClick={() => handleButtonClick("favorite")}
        >
          Favourites
        </button>
      </div>
      {loading ? (
        <h1 style={{ display: "flex", justifyContent: "center" }}>
          Loading...
        </h1>
      ) : (
        <div className="library-list">
          {filterBooks()
            ?.filter((book) => {
              const searchTerms = searchQuery.toLowerCase().split(" ");
              return searchTerms.every(
                (term) =>
                  book.title.toLowerCase().includes(term) ||
                  book.author.toLowerCase().includes(term)
              );
            })
            ?.map((book) => (
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
      )}
    </div>
  );
};

export default E_Library;
