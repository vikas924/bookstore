import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { addbook, postBooks } from '../redux/books/booksSlice';

export default function Addbutton({
  id, title, author, data,
}) {
  const dispatch = useDispatch();
  const submit = async () => {
    if ((title !== '') && (author !== '')) {
      const adddata = {
        item_id: id,
        title,
        author,
        category: 'book',
      };
      dispatch(addbook(adddata));
      await dispatch(postBooks(adddata));
      data({ title: '', author: '' });
    }
  };
  return (
    <>
      <button className="button" type="button" onClick={submit}>add</button>
    </>
  );
}

Addbutton.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  data: PropTypes.func.isRequired,
};
