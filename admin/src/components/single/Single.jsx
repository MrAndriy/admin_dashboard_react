import './single.scss';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Chart from '../chart/Chart';
import List from '../table/Table';
import { $host } from '../../http';

const Single = () => {
  const location = useLocation();
  const path = location.pathname;

  const [person, setPerson] = useState({});

  useEffect(() => {
    $host.get(path).then((res) => {
      setPerson(res.data).catch((err) => console.log(err));
    });
  }, [location, path]);

  return (
    <div className="single">
      <div className="singleContainer">
        <div className="top">
          <div className="left">
            <div className="editButton">
              <span>edit</span>
            </div>
            <div className="title">
              <span>Information</span>
            </div>
            <div className="item">
              <img src={person.img} alt="avatar" className="itemImg" />
              <div className="details">
                <h1 className="itemTitle">{person.fullname}</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">{person.email}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">{person.phone}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">City:</span>
                  <span className="itemValue">{person.city}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">{person.country}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Role:</span>
                  <span className="itemValue">{person.role}</span>
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
          <p className="description">No information yet</p>
        </div>
      </div>
    </div>
  );
};

export default Single;
