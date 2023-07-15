import React from 'react';
import { Outlet } from 'react-router-dom';
import './layout.css';
import Header from './navbar';

export default function Layout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
