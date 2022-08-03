import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../contex/AuthContext';
import AuthServices from '../../services/AuthServices';
import './aside.scss';

// import logo from '../../images/logo.png';

const Aside = () => {
  const { token, loading, error, dispatch } = useContext(AuthContext);

  const logout = async () => {
    try {
      await AuthServices.logout();
      dispatch({ type: 'LOGOUT' });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <aside>
      <div className="top">
        <div className="logo">
          {/* <img src={logo} alt='logo' /> */}
          <h2 className="danger">Hootels panel</h2>
        </div>
        <div className="close" id="close-btn">
          <span className="material-icons-sharp">close</span>
        </div>
      </div>
      <div className="sidebar">
        <NavLink to={'/'}>
          <span className="material-icons-sharp">grid_view</span>
          <h3>Dashboard</h3>
        </NavLink>
        <NavLink to={'/users'}>
          <span className="material-icons-sharp">person_outline</span>
          <h3>Users</h3>
        </NavLink>
        <NavLink to={'/hotels'}>
          <span className="material-icons-sharp">hotel</span>
          <h3>Hotels</h3>
        </NavLink>
        <NavLink to={'/rooms'}>
          <span className="material-icons-sharp">living</span> <h3>Rooms</h3>
        </NavLink>
        <NavLink to={'/analytics'}>
          <span className="material-icons-sharp">insights</span>
          <h3>Analytics</h3>
        </NavLink>
        <NavLink to={'/Messages'}>
          <span className="material-icons-sharp">mail_outline </span>
          <h3>Messages</h3>
          <span className="message-count">26</span>
        </NavLink>
        <NavLink to={'/Logout'} onClick={logout}>
          <span className="material-icons-sharp">logout</span>
          <h3>Logout</h3>
        </NavLink>
      </div>
    </aside>
  );
};

export default Aside;
