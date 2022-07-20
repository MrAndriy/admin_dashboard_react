import Chart from '../chart/Chart';
import Insights from '../Insights/Insights';

const DashBoard = () => {
  return (
    <>
      <Insights />
      <Chart title={'Last 6 months'}/>
    </>
  );
};

export default DashBoard;
