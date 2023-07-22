import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgressbar } from 'react-circular-progressbar';
import Removebutton from './removebutton';
import 'react-circular-progressbar/dist/styles.css';

export default function Book({ list }) {
  return (
    <div key={list.item_id} className="paradiv">
      <div className="bookdiv1">
        <p className="bookfirstdivpara">{list.category}</p>
        <h2 className="bookfirstdivheading">{list.title}</h2>
        <p className="bookfirstdivpara2">{list.author}</p>
        <div className="book1innerdiv">
          <button type="button" className="book1button">Comments</button>
          <Removebutton id={list.item_id} />
          <button type="button" className="book1button">Edit</button>
        </div>
      </div>
      <div className="bookdiv2">
        <div className="bookinnerdiv1">
          <div className="progressbar"><CircularProgressbar value="64" /></div>
          <div className="percentagediv">
            <h2 className="bookdivheading2">64%</h2>
            <p className="bookdivpara2">
              completed

            </p>

          </div>
        </div>
        <div className="bookinnerdiv2">
          <p className="bookinnerdiv2para">Current Chapter</p>
          <p className="bookinnerdiv2para2">Chapter 15</p>
          <button type="button" className="bookinnerdiv2button">update progress</button>
        </div>
      </div>
    </div>
  );
}

Book.propTypes = {
  list: PropTypes.shape({
    item_id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};
