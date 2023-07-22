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
      <div className="line" />
      <div className="addBook">
        <h2 id="heading2">Add new book</h2>
        <form className="form">
          <input type="text" name="title" id="title" className="titleinput" placeholder="Title" value={data.title} onChange={change} />
          {'\n'}
          <input type="text" name="author" id="author" className="authorinput" placeholder="Author" value={data.author} onChange={change} />
          {'\n'}
          <div className="formbutton">
            <Addbutton id={nanoid()} title={data.title} author={data.author} data={setdata} />
          </div>
        </form>
      </div>
    </>
  );
}
