import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import CustomButton from 'ui-component/custom-button';

const headerCustomerTable = ['CUSTOMER ACCOUNT NO.', 'MERCHANT ACCOUNT NO.', 'STATUS', 'DISCRIPTION', 'TIME', 'DATE', 'AMOUNT', 'ACTIONS'];

const StickyHeadTable = ({ data, pay, rejected }) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  console.log({ data });
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
            {data?.length &&
              data?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                const date = new Date(row?.createdAt).toLocaleDateString();
                const time = new Date(row?.createdAt).toLocaleTimeString();
                const statusColor = {
                  pending: 'yellow',
                  rejected: 'red',
                  succeeded: 'green'
                };
                return (
                  <TableRow key={row?._id}>
                    <TableCell>{row?.customerAccountNumber}</TableCell>
                    <TableCell>{row?.merchantAccountNumber}</TableCell>
                    <TableCell sx={{ color: statusColor[row?.status] }}>{row?.status}</TableCell>
                    <TableCell>{row?.description}</TableCell>
                    <TableCell>{time}</TableCell>
                    <TableCell>{date}</TableCell>
                    <TableCell>{row?.amount}</TableCell>
                    {row?.status === 'pending' && (
                      <TableCell>
                        <CustomButton color="success" onClick={() => pay(row?._id)}>
                          Pay
                        </CustomButton>
                        <CustomButton color="error" onClick={() => rejected(row?._id)}>
                          Reject
                        </CustomButton>
                      </TableCell>
                    )}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 100]}
        component="div"
        count={data?.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default StickyHeadTable;
