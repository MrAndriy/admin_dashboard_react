import './list.scss';
import DataTable from '../datatable/DataTable';

const List = ({ columns }) => {
  return (
    <div className="list">
      <div className="listContainer">
        <DataTable columns={columns} />
      </div>
    </div>
  );
};

export default List;
