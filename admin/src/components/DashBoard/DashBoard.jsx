import Chart from '../chart/Chart';
import Insights from '../Insights/Insights';
import Featured from '../featured/Featured';

const DashBoard = () => {
  return (
    <>
      <Insights />
      <Chart aspect={3 / 1} title="Last 6 Months" />
    </>
  );
};

export default DashBoard;
