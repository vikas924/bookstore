import React from 'react';
import { useSelector } from 'react-redux';
import Book from './book';
import Form from './form';

export default function Books() {
  const curentstate = useSelector((state) => state.books.book);
  console.log(curentstate);

  const Show = curentstate.map((book) => (<Book key={book.id} list={book} />));
  return (
    <section id="List" className="page">
      <h1 id="heading1">All Awesome books</h1>
      <div id="list">
        {Show}
      </div>
      <Form />
    </section>
  );
}
