import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ImUser } from 'react-icons/im';

export default function Header() {
  const [data, setData] = useState({
    render: true,
    class: 'links container',
  });

  function toggle() {
    const { render } = data;
    if (render === false) {
      setData(() => ({
        render: true,
        class: 'links container',
      }));
    } else {
      setData(() => ({
        render: false,
        class: 'links container hide',
      }));
    }
  }
  return (
    <header className="navbar">
      <div className="navwrap container">
        <h1 className="header">Bookstore CMS</h1>
        <nav className="navdiv container">
          <ul className={data.class}>
            <li>
              <button type="button" className="linkbutton" onClick={toggle}><Link to="/" className="link">Home</Link></button>
            </li>
            <li>
              <button type="button" className="linkbutton" onClick={toggle}><Link to="Categories" className="link">Categories</Link></button>
            </li>
          </ul>
        </nav>
      </div>
      {(data.render) ? (
        <button type="button" className="navbutton" aria-label="Save" onClick={toggle}>
          <ImUser className="icon" />
        </button>
      ) : (
        <button type="button" className="navbutton" aria-label="Save" onClick={toggle}>
          <ImUser className="icon" />
        </button>
      ) }
    </header>
  );
}
