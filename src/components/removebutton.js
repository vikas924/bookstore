import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removebook } from '../redux/books/booksSlice';

export default function Removebutton({
  id,
}) {
  const dispatch = useDispatch();
  return (
    <>
      <button className="button" type="button" onClick={() => dispatch(removebook(id))}>remove</button>
    </>
  );
}

Removebutton.propTypes = {
  id: PropTypes.string.isRequired,
};
