import './featured.scss';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { KeyboardArrowDownOutlined } from '@mui/icons-material';

const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Total Revenue</h1>
        <MoreVertOutlinedIcon />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={70} text="70%" />
        </div>
        <p className="title">Total sales made today</p>
        <p className="amount">$420</p>
        <p className="description">
          Previous transactions processing. Last payment may not be included
        </p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">
              <span>Target</span>
            </div>
            <div className="itemResult positive">
              <div className="resultAmount">
                <KeyboardArrowDownOutlined fontSize="small" />
                <span>$12.4k</span>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">
              <span>Last Week</span>
            </div>
            <div className="itemResult positive">
              <div className="resultAmount">
                <KeyboardArrowDownOutlined fontSize="small" />
                <span>$12.4k</span>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">
              <span>Last Month</span>
            </div>
            <div className="itemResult positive">
              <div className="resultAmount">
                <KeyboardArrowDownOutlined fontSize="small" />
                <span>$12.4k</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
