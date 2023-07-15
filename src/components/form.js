import React from 'react';
import PropTypes from 'prop-types';

export default function Form({ submit, change }) {
  return (
    <>
      <h2 id="heading2">Add a new book</h2>
      <form className="form">
        <div>
          <input type="text" name="title" id="title" className="forminput" placeholder="Title" onChange={change} />
        </div>
        {'\n'}
        <div>
          <input type="text" name="author" id="author" className="forminput" placeholder="Author" onChange={change} />
        </div>
        {'\n'}
        <div className="formbutton">
          <button type="button" onClick={submit} className="add">Add</button>
        </div>
      </form>
    </>
  );
}

Form.propTypes = {
  submit: PropTypes.func.isRequired,
  change: PropTypes.func.isRequired,
};
