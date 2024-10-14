import React, { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Divider,
  Grid2,
  IconButton,
  Pagination,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import {
  ArrowForward,
  AutorenewRounded,
  CopyAll,
  CopyAllRounded,
  CopyAllTwoTone,
  FilterList,
  KeyboardArrowDown,
  KeyboardArrowUp,
  RocketLaunchRounded,
  Search,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";

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

function Wallet() {
  const [showBalance, setShowBalance] = useState(false);
  const toggleBalanceVisibility = () => {
    setShowBalance((prev) => !prev);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Stack direction="row" spacing={2} marginBottom={4} marginTop={2}>
        <Button
          variant="outlined"
          startIcon={<RocketLaunchRounded />}
          sx={{ textTransform: "none", fontWeight: "bold" }}
        >
          Send Money
        </Button>

        <Button
          variant="outlined"
          startIcon={<AutorenewRounded />}
          sx={{ textTransform: "none", fontWeight: "bold" }}
        >
          Convert Funds
        </Button>
      </Stack>

      <Grid2 container spacing={2}>
        <Card>
          <CardContent>
            <Box sx={{ backgroundColor: "#f0e6ff", padding: 1 }}>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Stack direction="row" spacing={1}>
                  <Avatar sx={{ width: 30, height: 30 }} />
                  <Typography
                    variant="body1"
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    fontWeight="bold"
                  >
                    USD ($)
                  </Typography>
                </Stack>
                <Button
                  sx={{
                    textTransform: "none",
                    height: "40px",
                    minWidth: 40,
                    fontSize: "10px",
                  }}
                  variant="outlined"
                  size="small"
                  endIcon={
                    <Stack
                      direction="column"
                      fontSize="10px"
                      alignItems="center"
                    >
                      <KeyboardArrowUp fontSize="small" />
                      <KeyboardArrowDown fontSize="small" />
                    </Stack>
                  }
                >
                  Switch
                </Button>
              </Stack>
            </Box>

            <Divider sx={{ border: "1px solid #ccc", width: "100%" }} />

            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Box sx={{ p: 1 }}>
                <Typography variant="h4" fontWeight="bold">
                  {showBalance ? "$5,350" : "*****"}
                </Typography>
                <Button
                  variant="outlined"
                  size="small"
                  endIcon={showBalance ? <VisibilityOff /> : <Visibility />}
                  sx={{
                    color: "#7105E9",
                    textTransform: "none",
                    padding: "10px",
                    mt: "30px",
                    fontSize: "10px",
                    border: "1px solid #ccc",
                    height: "15px",
                  }}
                  onClick={toggleBalanceVisibility}
                >
                  {showBalance ? "Wallet Balance" : "Wallet Balance"}
                </Button>
              </Box>
            </Stack>
            <Button
              variant="text"
              endIcon={<ArrowForward />}
              sx={{
                textTransform: "none",
                marginTop: "50px",
                marginLeft: "150px",
                color: "#7105E9",
                fontSize: "10px",
              }}
            >
              Account Statement
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <Box sx={{ backgroundColor: "#f0e6ff", padding: 2 }}>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography
                  variant="h5"
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  fontWeight="bold"
                  fontSize="small"
                >
                  Receiving Account
                </Typography>

                <Button
                  sx={{
                    textTransform: "none",
                    height: "20px",
                    fontSize: "10px",
                    marginLeft: "30px",
                  }}
                  variant="outlined"
                  size="small"
                  endIcon={<ArrowForward />}
                >
                  View Details
                </Button>
              </Stack>
            </Box>

            <Divider sx={{ border: "1px solid #ccc", width: "100%" }} />

            <Box sx={{ p: 2 }}>
              <Typography variant="h6" fontSize="medium">
                Elijah Nnabuife <CopyAll />
              </Typography>
              <Typography variant="body2">Account Holder</Typography>
              <Divider sx={{ my: 1, width: "80%" }} />
              <Typography variant="h6" fontSize="medium">
                Wells Fargo Bank, N.A. <CopyAll />
              </Typography>
              <Typography variant="body2">Bank Name</Typography>
              <Divider sx={{ my: 1, width: "80%" }} />
              <Typography variant="h6" fontSize="medium">
                40630101689676683 <CopyAll />
              </Typography>
              <Typography variant="body2">Account Number</Typography>
            </Box>
          </CardContent>
        </Card>

        <Card style={{ padding: "20px" }}>
          <CardContent>
            <Typography>Income</Typography>
            <Typography>$0.00</Typography>
            <Typography>Expenses</Typography>
            <Typography>$0.00</Typography>
          </CardContent>
        </Card>
      </Grid2>

      <Box sx={{ mt: 3 }}>
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
    </Box>
  );
}

export default Wallet;
