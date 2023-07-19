import React from 'react';
import PropTypes from 'prop-types';
import Removebutton from './removebutton';

export default function Book({ list }) {
  return (
    <div key={list.item_id} className="paradiv">
      <p>
        {list.title}
        {' '}
        <span className="span"> by </span>
        {' '}
        {list.author}
      </p>
      <Removebutton id={list.item_id} />
    </div>
  );
}

Book.propTypes = {
  list: PropTypes.shape({
    item_id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};
