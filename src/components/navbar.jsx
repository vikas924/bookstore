import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [data, setData] = useState({
    render: true,
    class: 'links',
  });

  function toggle() {
    const { render } = data;
    if (render === false) {
      setData(() => ({
        render: true,
        class: 'links',
      }));
    } else {
      setData(() => ({
        render: false,
        class: 'links hide',
      }));
    }
  }

  return (
    <header className="navbar">
      <h1 className="header">Bookstore</h1>
      <nav className="navdiv">
        {(data.render) ? <button type="button" className="navbutton" onClick={toggle}>menu</button> : <button type="button" className="navbutton" onClick={toggle}>close</button> }
        <ul className={`${data.class}`}>
          <li>
            <button type="button" className="linkbutton" onClick={toggle}><Link to="/" className="link">Home</Link></button>
          </li>
          <li>
            <button type="button" className="linkbutton" onClick={toggle}><Link to="Categories" className="link">Categories</Link></button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
