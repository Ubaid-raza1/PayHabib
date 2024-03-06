import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Button } from '@mui/material';

const headerCustomerTable = ['CUSTOMER ACCOUNT NO.', 'MERCHANT ACCOUNT NO.', 'STATUS', 'DISCRIPTION', 'TIME', 'DATE', 'AMOUNT', 'ACTIONS'];
const rows = [
  {
    id: 1,
    customerAccountNo: 123456789,
    merchantAccountNo: 1425364141,
    status: 'panding',
    discription: 'payment purpose',
    time: '03:09 AM',
    date: 'feb 15,2023',
    amount: '890 PKR'
  },
  {
    id: 2,
    customerAccountNo: 123456789,
    merchantAccountNo: 1425364141,
    status: 'panding',
    discription: 'payment purpose',
    time: '03:09 AM',
    date: 'feb 15,2023',
    amount: '890 PKR'
  },
  {
    id: 3,
    customerAccountNo: 123456789,
    merchantAccountNo: 1425364141,
    status: 'panding',
    discription: 'payment purpose',
    time: '03:09 AM',
    date: 'feb 15,2023',
    amount: '890 PKR'
  },
  {
    id: 4,
    customerAccountNo: 123456789,
    merchantAccountNo: 1425364141,
    status: 'panding',
    discription: 'payment purpose',
    time: '03:09 AM',
    date: 'feb 15,2023',
    amount: '890 PKR'
  },
  {
    id: 5,
    customerAccountNo: 123456789,
    merchantAccountNo: 1425364141,
    status: 'panding',
    discription: 'payment purpose',
    time: '03:09 AM',
    date: 'feb 15,2023',
    amount: '890 PKR'
  },
  {
    id: 6,
    customerAccountNo: 123456789,
    merchantAccountNo: 1425364141,
    status: 'panding',
    discription: 'payment purpose',
    time: '03:09 AM',
    date: 'feb 15,2023',
    amount: '890 PKR'
  },
  {
    id: 7,
    customerAccountNo: 123456789,
    merchantAccountNo: 1425364141,
    status: 'panding',
    discription: 'payment purpose',
    time: '03:09 AM',
    date: 'feb 15,2023',
    amount: '890 PKR'
  }
];

const StickyHeadTable = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {headerCustomerTable.map((column, index) => (
                <TableCell key={index}>{column}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow key={row.id}>
                  <TableCell>{row.customerAccountNo}</TableCell>
                  <TableCell>{row.merchantAccountNo}</TableCell>
                  <TableCell>{row.status}</TableCell>
                  <TableCell>{row.discription}</TableCell>
                  <TableCell>{row.time}</TableCell>
                  <TableCell>{row.date}</TableCell>
                  <TableCell>{row.amount}</TableCell>
                  <TableCell>
                    <Button color="success">Pay</Button>
                    <Button color="error">Reject</Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default StickyHeadTable;
