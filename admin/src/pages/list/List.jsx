import './list.scss';
import SideBar from '../../components/sidebar/SideBar';
import NavBar from '../../components/navbar/NavBar';
import DataTable from '../../components/datatable/DataTable';

const List = ({ columns }) => {
  return (
    <div className="list">
      <SideBar />
      <div className="listContainer">
        <NavBar />
        <DataTable columns={columns} />
      </div>
    </div>
  );
};

export default List;
