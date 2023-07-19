import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removebook } from '../redux/books/booksSlice';

export default function Book({ list }) {
  const dispatch = useDispatch();

  return (
    <div key={list.id} className="paradiv">
      <p>
        {list.title}
        {' '}
        <span className="span"> by </span>
        {' '}
        {list.author}
      </p>
      <button className="button" type="button" onClick={() => dispatch(removebook(list.id))}>remove</button>
    </div>
  );
}

Book.propTypes = {
  list: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};
