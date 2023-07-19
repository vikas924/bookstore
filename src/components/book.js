import React from 'react';
import PropTypes from 'prop-types';
import Button from './button';

export default function Book({ list }) {
  return (
    <div key={list.id} className="paradiv">
      <p>
        {list.title}
        {' '}
        <span className="span"> by </span>
        {' '}
        {list.author}
      </p>
      <Button name="remove" />
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
