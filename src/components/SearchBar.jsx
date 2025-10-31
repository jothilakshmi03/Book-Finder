import React, { useState } from "react";

function SearchBar({ onSearch }) {
  const [form, setForm] = useState({ title: "", author: "", subject: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(form);
  };

  return (
    <div className="search-card">
      <form className="search-bar" onSubmit={handleSubmit}>
        <input name="title" placeholder="Title" value={form.title} onChange={handleChange} />
        <input name="author" placeholder="Author" value={form.author} onChange={handleChange} />
        <input name="subject" placeholder="Subject/Genre" value={form.subject} onChange={handleChange} />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default SearchBar;
