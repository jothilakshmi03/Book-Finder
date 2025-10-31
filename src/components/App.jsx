import React, { useState } from "react";
import SearchBar from "./SearchBar";
import BookList from "./BookList";
import BookDetailsModal from "./BookDetailsModal";
import Loader from "./Loader";
import Error from "./Error";

function App() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedBook, setSelectedBook] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  const handleSearch = async (query) => {
    setLoading(true);
    setError("");
    setBooks([]);
    setSelectedBook(null);
    let url = "https://openlibrary.org/search.json?";
    if (query.title) url += `title=${encodeURIComponent(query.title)}&`;
    if (query.author) url += `author=${encodeURIComponent(query.author)}&`;
    if (query.subject) url += `subject=${encodeURIComponent(query.subject)}&`;

    try {
      const resp = await fetch(url);
      const data = await resp.json();
      setBooks(data.docs || []);
      if (!data.docs || data.docs.length === 0) setError("No books found.");
    } catch {
      setError("Failed to fetch books.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`app-container ${darkMode ? "dark-mode" : ""}`}>
      <div style={{textAlign:"right"}}><button className="mode-toggle-btn" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button></div>
      <h1>Book Finder</h1>
      <SearchBar onSearch={handleSearch} />
      {loading && <Loader />}
      {error && <Error message={error} />}
      {!loading && !error && (
        <BookList books={books} onSelect={setSelectedBook} />
      )}
      {selectedBook && (
        <BookDetailsModal book={selectedBook} onClose={() => setSelectedBook(null)} />
      )}
    </div>
  );
}

export default App;
