import React from "react";
import {
  Box,
  Button,
  Chip,
  IconButton,
  Pagination,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { FilterList, Search } from "@mui/icons-material";

const transactions = [
  {
    date: "Aug 03",
    sender: "Nnabuife Elijah",
    recipient: "Elijah",
    amount: "-$1,708",
    status: "Successful",
    type: "Transfer",
  },
  {
    date: "Aug 03",
    sender: "Nnabuife Elijah",
    recipient: "Elijah",
    amount: "-$1,708",
    status: "Refunded",
    type: "Transfer",
  },
  {
    date: "Aug 03",
    sender: "Nnabuife Elijah",
    recipient: "Elijah",
    amount: "-$1,708",
    status: "Successful",
    type: "Fund Wallet",
  },
  {
    date: "Aug 03",
    sender: "Nnabuife Elijah",
    recipient: "Elijah",
    amount: "-$1,708",
    status: "Successful",
    type: "Transfer",
  },
  {
    date: "Aug 03",
    sender: "Nnabuife Elijah",
    recipient: "Elijah",
    amount: "-$1,708",
    status: "Successful",
    type: "Transfer",
  },
];

function Transaction() {
  return (
    <Box sx={{ padding: "20px" }}>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        mb={3}
        gap={2}
      >
        <TextField
          variant="outlined"
          size="small"
          placeholder="Search for a transaction"
          InputProps={{
            startAdornment: (
              <IconButton>
                <Search />
              </IconButton>
            ),
          }}
          sx={{ width: "100%" }}
        />
        <Button variant="outlined" endIcon={<FilterList />}>
          Filter
        </Button>
      </Box>

      <Typography variant="h6" mb={2}>
        Recent Transactions
      </Typography>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Sender</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Recipient</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Type</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {transactions.map((tx, index) => (
              <TableRow key={index}>
                <TableCell>{tx.date}</TableCell>
                <TableCell>{tx.sender}</TableCell>
                <TableCell>{tx.amount}</TableCell>
                <TableCell>{tx.recipient}</TableCell>
                <TableCell>
                  <Chip
                    label={tx.status}
                    color={tx.status === "Successful" ? "success" : "default"}
                    variant="outlined"
                  />
                </TableCell>
                <TableCell>{tx.type}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mt={3}
      >
        <Typography variant="body2">1-5 of 5</Typography>
        <Pagination count={1} page={1} />
      </Box>
    </Box>
  );
}

export default Transaction;
