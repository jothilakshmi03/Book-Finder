import React from "react";

function BookDetailsModal({ book, onClose }) {
  const coverImg = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
    : "https://via.placeholder.com/200x300?text=No+Cover";
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>X</button>
        <img src={coverImg} alt={book.title} />
        <h2>{book.title}</h2>
        <p><strong>Author(s):</strong> {book.author_name ? book.author_name.join(", ") : "Unknown"}</p>
        <p><strong>First Published:</strong> {book.first_publish_year || "N/A"}</p>
        <p><strong>Subjects:</strong> {book.subject ? book.subject.join(", ") : "N/A"}</p>
        <p><a href={`https://openlibrary.org${book.key}`} target="_blank" rel="noopener noreferrer">View on OpenLibrary</a></p>
      </div>
    </div>
  );
}

export default BookDetailsModal;
