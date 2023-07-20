import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './book';
import Form from './form';
import { fetchBooks } from '../redux/books/booksSlice';

export default function Books() {
  const curentstate = useSelector((state) => state.books.book);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const Show = curentstate.map((book) => (<Book key={book.item_id} list={book} />));
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
