import React from "react";

function BookCard({ book, onSelect }) {
  const coverImg = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
    : "https://via.placeholder.com/120x180?text=No+Cover";
  const authors = book.author_name ? book.author_name.join(", ") : "Unknown";
  return (
    <div className="book-card" onClick={() => onSelect(book)}>
      <img src={coverImg} alt={book.title} />
      <h3>{book.title}</h3>
      <p>{authors}</p>
      <p>{book.first_publish_year || ""}</p>
    </div>
  );
}

export default BookCard;
