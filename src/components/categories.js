import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkstatus } from '../redux/categories/categoriesSlice';

export default function Categories() {
  const { status } = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  return (
    <div className="page">
      <h1>categories</h1>
      <p>{status}</p>
      <button type="button" className="button statusbutton" onClick={() => dispatch(checkstatus())}>Checkstatus</button>
    </div>
  );
}
