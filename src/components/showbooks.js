import React, { useState } from 'react';
import Book from './book';
import Form from './form';

export default function Books() {
  const [books, setBooks] = useState([
    { id: 1, title: 'hello', author: 'noone' },
    { id: 2, title: 'hel', author: 'one' },
  ]);
  const [data, setData] = useState({ title: '', author: '' });

  const submit = () => {
    setBooks((prev) => [...prev, {
      id: (prev.length + 1),
      title: data.title,
      author: data.author,
    }]);
  };

  const change = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const Show = books.map((book) => (<Book key={book.id} list={book} />));

  return (
    <section id="List" className="page">
      <h1 id="heading1">All Awesome books</h1>
      <div id="list">
        {Show}
      </div>
      <Form submit={submit} change={change} />
    </section>
  );
}
