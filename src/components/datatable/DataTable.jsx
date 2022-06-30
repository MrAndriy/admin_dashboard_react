import './datatable.scss';
import { DataGrid } from '@mui/x-data-grid';

//temp for now , later we able to use Axios
const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  {
    field: 'fullName',
    headerName: 'fullName',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img src={params.row.img} alt="avatar" className="cellImg" />
          {`${params.row.firstName || ''} ${params.row.lastName || ''}`}
        </div>
      );
    },
  },
  { field: 'email', headerName: 'Email', width: 150 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 100,
  },
  {
    field: 'status',
    headerName: 'Status',
    width: 80,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

const rows = [
  {
    id: 1,
    lastName: 'Snow',
    firstName: 'Jon',
    email: 'test@gmail.com',
    age: 35,
    status: 'online',
    img:
      'https://www.clipartmax.com/png/middle/258-2582267_circled-user-male-skin-type-1-2-icon-male-user-icon.png',
  },
  {
    id: 2,
    lastName: 'Lannister',
    firstName: 'Cersei',
    email: 'test@gmail.com',
    age: 42,
    status: 'offline',
    img:
      'https://www.clipartmax.com/png/middle/258-2582267_circled-user-male-skin-type-1-2-icon-male-user-icon.png',
  },
  {
    id: 3,
    lastName: 'Lannister',
    firstName: 'Jaime',
    email: 'test@gmail.com',
    age: 45,
    status: 'online',
    img:
      'https://www.clipartmax.com/png/middle/258-2582267_circled-user-male-skin-type-1-2-icon-male-user-icon.png',
  },
  {
    id: 4,
    lastName: 'Stark',
    firstName: 'Arya',
    email: 'test@gmail.com',
    age: 16,
    status: 'offline',
    img:
      'https://www.clipartmax.com/png/middle/258-2582267_circled-user-male-skin-type-1-2-icon-male-user-icon.png',
  },
  {
    id: 5,
    lastName: 'Targaryen',
    firstName: 'Daenerys',
    email: 'test@gmail.com',
    age: null,
    status: 'online',
    img:
      'https://www.clipartmax.com/png/middle/258-2582267_circled-user-male-skin-type-1-2-icon-male-user-icon.png',
  },
  {
    id: 6,
    lastName: 'Melisandre',
    firstName: null,
    email: 'test@gmail.com',
    age: 150,
    status: 'online',
    img:
      'https://www.clipartmax.com/png/middle/258-2582267_circled-user-male-skin-type-1-2-icon-male-user-icon.png',
  },
  {
    id: 7,
    lastName: 'Clifford',
    firstName: 'Ferrara',
    email: 'test@gmail.com',
    age: 44,
    status: 'offline',
    img:
      'https://www.clipartmax.com/png/middle/258-2582267_circled-user-male-skin-type-1-2-icon-male-user-icon.png',
  },
  {
    id: 8,
    lastName: 'Frances',
    firstName: 'Rossini',
    email: 'test@gmail.com',
    age: 36,
    status: 'online',
    img:
      'https://www.clipartmax.com/png/middle/258-2582267_circled-user-male-skin-type-1-2-icon-male-user-icon.png',
  },
  {
    id: 9,
    lastName: 'Roxie',
    firstName: 'Harvey',
    email: 'test@gmail.com',
    age: 65,
    status: 'offline',
    img:
      'https://www.clipartmax.com/png/middle/258-2582267_circled-user-male-skin-type-1-2-icon-male-user-icon.png',
  },
];

const DataTable = () => {
  const actionColumn = [
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      sortable: false,
      renderCell: () => {
        return (
          <div className="cellAction">
            <div className="viewButton">View</div>
            <div className="deleteButton">Delete</div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="datatable">
      <DataGrid
        className="dataGrid"
        rows={rows}
        columns={columns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default DataTable;
