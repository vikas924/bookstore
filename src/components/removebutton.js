import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removebook, removeapibook } from '../redux/books/booksSlice';

export default function Removebutton({
  id,
}) {
  const dispatch = useDispatch();

  const handleclick = async (id) => {
    dispatch(removebook(id));
    await dispatch(removeapibook(id));
  };
  return (
    <>
      <button className="book1button book1difference" type="button" onClick={() => handleclick(id)}>remove</button>
    </>
  );
}

Removebutton.propTypes = {
  id: PropTypes.string.isRequired,
};
