import React, { useState, useEffect } from 'react';
import Book from './book';
import Form from './form';

export default function Books() {
  function getInitialbooks() {
    const temp = localStorage.getItem('books');
    const savedBooks = JSON.parse(temp);
    return savedBooks || [
      { id: 1, title: 'strangers', author: 'ben' },
      { id: 2, title: 'life', author: 'kevin' },
    ];
  }

  const [books, setBooks] = useState(getInitialbooks);
  const [data, setData] = useState({ title: '', author: '' });

  useEffect(() => {
    const temp = JSON.stringify(books);
    localStorage.setItem('books', temp);
  }, [books]);

  const submit = () => {
    if ((data.title !== '') && (data.author !== '')) {
      setBooks((prev) => [...prev, {
        id: (prev.length + 1),
        title: data.title,
        author: data.author,
      }]);
      setData({ title: '', author: '' });
    }
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
      <Form submit={submit} change={change} data={data} />
    </section>
  );
}
