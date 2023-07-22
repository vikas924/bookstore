import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/layout';
import Categories from './components/categories';
import Books from './components/showbooks';

function App() {
  return (
    <div className="wraper">
      <div className="wrap">
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Books />} />
            <Route path="Categories" element={<Categories />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
