import './table.scss';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const List = () => {
  const rows = [
    {
      id: 112132,
      product: 'Acer Nitro 5',
      img: 'https://m.media-amazon.com/images/I/71CHxshl1lL._AC_UY218_.jpg',
      customer: 'John Smith',
      date: '1 march',
      amount: 785,
      method: 'Cash on Delivery',
      status: 'Approved',
    },
    {
      id: 553265,
      product: 'Playstation 5',
      img:
        'https://m.media-amazon.com/images/I/31g7kdk9zoL._AC_SX296_SY426_FMwebp_QL65_.jpg',
      customer: 'Michael Doe',
      date: '1 march',
      amount: 900,
      method: 'Online Paymment',
      status: 'Pending',
    },
    {
      id: 984023,
      product: 'Razer Blade 15',
      img:
        'https://m.media-amazon.com/images/I/61-ODJrgv6L._AC_SX296_SY426_FMwebp_QL65_.jpg',
      customer: 'Jane Smith',
      date: '1 march',
      amount: 950,
      method: 'Online Paymment',
      status: 'Approved',
    },
    {
      id: 126534,
      product: 'ASUS ROG STRIX',
      img:
        'https://m.media-amazon.com/images/I/71RK6+rx-xL._AC_SX296_SY426_FMwebp_QL65_.jpg',
      customer: 'Jane Smith',
      date: '1 march',
      amount: 950,
      method: 'Online Paymment',
      status: 'Approved',
    },
  ];

  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Product</TableCell>
            <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Payment Method</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt={row.product} className="image" />
                  {row.product}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
