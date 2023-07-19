import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { add } from '../redux/books/booksSlice';

export default function Form() {
  const state = useSelector((state) => state.book);
  const [data, setData] = useState({ title: '', author: '' });
  const dispatch = useDispatch();

  const submit = () => {
    if ((data.title !== '') && (data.author !== '')) {
      dispatch(add({
        id: (state.length + 1),
        title: data.title,
        author: data.author,
      }));
      setData({ title: '', author: '' });
    }
  };

  const change = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <>
      <h2 id="heading2">Add a new book</h2>
      <form className="form">
        <div>
          <input type="text" name="title" id="title" className="forminput" placeholder="Title" value={data.title} onChange={change} />
        </div>
        {'\n'}
        <div>
          <input type="text" name="author" id="author" className="forminput" placeholder="Author" value={data.author} onChange={change} />
        </div>
        {'\n'}
        <div className="formbutton">
          <button type="button" onClick={submit} className="add">Add</button>
        </div>
      </form>
    </>
  );
}
