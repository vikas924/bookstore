import React, { useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import Addbutton from './addbutton';

export default function Form() {
  const [data, setData] = useState({ title: '', author: '' });

  const change = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const setdata = (data) => {
    setData(data);
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
          <Addbutton id={nanoid()} title={data.title} author={data.author} data={setdata} />
        </div>
      </form>
    </>
  );
}
