import './single.scss';
import SideBar from '../../components/sidebar/SideBar';
import NavBar from '../../components/navbar/NavBar';
import Chart from '../../components/chart/Chart';
import List from '../../components/table/Table';

const Single = () => {
  return (
    <div className="single">
      <SideBar />
      <div className="singleContainer">
        <NavBar />
        <div className="top">
          <div className="left">
            <div className="editButton">
              <span>edit</span>
            </div>
            <div className="title">
              <span>Information</span>
            </div>
            <div className="item">
              <img
                src="https://www.clipartmax.com/png/middle/258-2582267_circled-user-male-skin-type-1-2-icon-male-user-icon.png"
                alt="avatar"
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">Jane Doe</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">test@gmail.com </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+123-45-67-890 </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">
                    Elton St. 132 Garden Yd. NewYork
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">USA</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={2 / 1} title="User Spending (Last 6 Months) " />
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Last Transactions</h1>
          <List />
        </div>
      </div>
    </div>
  );
};

export default Single;
