import React from "react";
import BookCard from "./BookCard";

function BookList({ books, onSelect }) {
  if (!books.length) return null;
  return (
    <div className="book-list">
      {books.slice(0, 20).map((book, idx) => (
        <BookCard key={book.key || idx} book={book} onSelect={onSelect} />
      ))}
    </div>
  );
}

export default BookList;
