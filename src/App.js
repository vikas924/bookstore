import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout';
import Categories from './components/categories';
import Books from './components/showbooks';

function App() {
  return (
    <div className="wraper">
      <Routes>
        <Route element={<Navbar />}>
          <Route index element={<Books />} />
          <Route path="Categories" element={<Categories />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
