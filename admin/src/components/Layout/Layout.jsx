import React from 'react';
import { Routes, Route, Link, Outlet } from 'react-router-dom';
import Aside from '../Aside';
import RightSideBar from '../rightSideBar/RightSideBar';
import './Layout.scss';

const Layout = () => {
  return (
    <div className="container">
      <Aside />
      <main>
        <h1>Dashboard</h1>
        <Outlet />
      </main>
      <RightSideBar />
    </div>
  );
};

export default Layout;
