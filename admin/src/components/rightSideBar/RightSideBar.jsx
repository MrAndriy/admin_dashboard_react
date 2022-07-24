import './RightSideBar.scss';
import { useContext } from 'react';
import { DarkModeContext } from '../../contex/darkModeContext';

const RightSideBar = () => {
  const { dispatch, darkMode } = useContext(DarkModeContext);

  const handleClick = () => {
    dispatch({ type: 'TOGGLE' });
    console.log(darkMode);
  };

  return (
    <div className="right__side-bar">
      <div className="top">
        <button id="menu-btn">
          <span className="material-icons-sharp">menu</span>
        </button>
        <div className="theme-toggler">
          <span
            className={`material-icons-sharp ${darkMode ? '' : 'active'}`}
            onClick={handleClick}
          >
            wb_sunny
          </span>
          <span
            className={`material-icons-sharp ${darkMode ? 'active' : ''}`}
            onClick={handleClick}
          >
            dark_mode
          </span>
        </div>
        <div className="profile">
          <div className="info">
            <p>
              Hey, <b>Andriy</b>
            </p>
            <small className="text-muted">Admin</small>
          </div>
          <div className="profile-photo">
            <img
              src="https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_male_user-512.png"
              alt="avatar"
              className="avatar"
            />
          </div>
        </div>
      </div>

      <div className="recent-updates">
        <h2>Recent Updates</h2>
        <div className="updates">
          <div className="update">
            <div className="profile-photo">
              {/* <img src="./images/profile-2.jpg" alt="profile photo"> */}
            </div>
            <div className="message">
              <p>
                <b>Mike Tyson</b> recive his order of DJI drone
              </p>
              <small className="text-muted">2 minutes ago</small>
            </div>
          </div>
        </div>
      </div>

      <div className="sales-analytics">
        <h2>Sales Analytics</h2>
        <div className="item online">
          <div className="icon">
            <span className="material-icons-sharp">shopping_cart</span>
          </div>
          <div className="right">
            <div className="info">
              <h3>ONLINE ORDERS</h3>
              <small className="text-muted">Last 24 Hours</small>
            </div>
            <h5 className="success">+39%</h5>
            <h3>3849</h3>
          </div>
        </div>
        <div className="item offline">
          <div className="icon">
            <span className="material-icons-sharp">shopping_bag</span>
          </div>
          <div className="right">
            <div className="info">
              <h3>OFFLINE ORDERS</h3>
              <small className="text-muted">Last 24 Hours</small>
            </div>
            <h5 className="danger">-17%</h5>
            <h3>1100</h3>
          </div>
        </div>
        <div className="item customers">
          <div className="icon">
            <span className="material-icons-sharp">person</span>
          </div>
          <div className="right">
            <div className="info">
              <h3>NEW CUSTOMERS</h3>
              <small className="text-muted">Last 24 Hours</small>
            </div>
            <h5 className="success">+25%</h5>
            <h3>849</h3>
          </div>
        </div>
        <div className="item add-product">
          <div>
            <span className="material-icons-sharp">add</span>
            <h3>Add Product</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSideBar;
