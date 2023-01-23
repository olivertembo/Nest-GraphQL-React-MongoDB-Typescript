import {
  Box,
  Container,
  IconButton,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  CircularProgress,
} from "@mui/material";
import * as React from "react";
import { styled } from "@mui/material/styles";
import { Button, Table, Paper } from "@mui/material";
import mockOrders from "../mock/mockOrders";
import Control from "../components/Cell/Control";
import * as styles from "./styles";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));


const Order = () => {
  const [orders, setOrders] = React.useState<Order[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(true);
      const data = mockOrders();
      console.log("data", data)
      setOrders(data);
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <Container>
      <Box mt={2}>
        {loading && <CircularProgress color="primary" />}
        {!loading && (
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Order ID</StyledTableCell>
                  <StyledTableCell align="right">Order Date</StyledTableCell>
                  <StyledTableCell align="right">Status</StyledTableCell>
                  <StyledTableCell align="right">Customer</StyledTableCell>
                  <StyledTableCell align="right">Employee</StyledTableCell>
                  <StyledTableCell align="right">Update Status</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {orders.map((order) => (
                  <TableRow className={`${order.status}`} sx={styles.row} key={order.id}>
                    <StyledTableCell component="th" scope="row">
                      {order.id}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {order.createdAt}
                    </StyledTableCell>

                    <StyledTableCell align="right">
                      <Box component="span" className={`${order.status}`} sx={styles.status}>
                        {order.status}
                      </Box>
                    </StyledTableCell>
                    <StyledTableCell align="right">
                    {`${order.customer.firstName} ${order.customer.lastName}`}
                    </StyledTableCell>
                    <StyledTableCell align="right">{`${order.employee.firstName} ${order.employee.lastName}`}</StyledTableCell>
                    <StyledTableCell align="right">
                      <Control isDisabled={order.status === "COMPLETE"} id={order.id} />
                    </StyledTableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Box>
    </Container>
  );
};

export default Order;
