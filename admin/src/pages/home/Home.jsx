import './home.scss';
import Featured from '../../components/featured/Featured';
import Chart from '../../components/chart/Chart';
import List from '../../components/table/Table';
import Aside from '../../components/Aside';
import RightSideBar from '../../components/rightSideBar/RightSideBar';
import Insights from '../../components/Insights/Insights';

const Home = () => {
  return (
    <div className="container">
      <Aside />
      <div className="homeContainer">
        <div className="widgets">
          <Insights />
        </div>
        <div className="charts">
          <Featured />
          <Chart aspect={2 / 1} title="Last 6 Months" />
        </div>
        <div className="listContainer">
          <div className="listContainer__title">
            <span>Latest transactions</span>
            <List />
          </div>
        </div>
      </div>
      <RightSideBar />
    </div>
  );
};

export default Home;
