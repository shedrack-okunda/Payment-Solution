import React, { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Divider,
  Grid2,
  MenuItem,
  Paper,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import {
  ArrowForward,
  AutorenewRounded,
  CopyAll,
  KeyboardArrowDown,
  KeyboardArrowUp,
  RocketLaunchRounded,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import { DataGrid } from "@mui/x-data-grid";

const rows = [
  {
    id: 1,
    date: "Aug 03",
    sender: "Nnabuife Elijah",
    recipient: "Elijah",
    amount: "-$1,708",
    status: "Successful",
    type: "Transfer",
  },
  {
    id: 2,
    date: "Aug 03",
    sender: "Nnabuife Elijah",
    recipient: "Elijah",
    amount: "-$1,708",
    status: "Refunded",
    type: "Transfer",
  },
  {
    id: 3,
    date: "Aug 03",
    sender: "Nnabuife Elijah",
    recipient: "Elijah",
    amount: "-$1,708",
    status: "Successful",
    type: "Fund Wallet",
  },
  {
    id: 4,
    date: "Aug 03",
    sender: "Nnabuife Elijah",
    recipient: "Elijah",
    amount: "-$1,708",
    status: "Successful",
    type: "Transfer",
  },
  {
    id: 5,
    date: "Aug 03",
    sender: "Nnabuife Elijah",
    recipient: "Elijah",
    amount: "-$1,708",
    status: "Successful",
    type: "Transfer",
  },
];

const columns = [
  { field: "id", headerName: "ID", width: 50 },
  { field: "date", headerName: "Date", editable: true },
  {
    field: "sender",
    headerName: "Sender",
    width: 150,
    editable: true,
  },
  {
    field: "amount",
    headerName: "Amount",
    type: "number",
    width: 110,
    editable: true,
  },
  {
    field: "recipient",
    headerName: "Recipient",
    width: 150,
    editable: true,
  },
  {
    field: "status",
    headerName: "Status",
    width: 110,
    editable: true,
    renderCell: (params) => {
      let color;
      let borderColor;

      switch (params.value) {
        case "Successful":
          color = "#4caf50";
          borderColor = "#388e3c";
          break;
        default:
          color = "#000";
          borderColor = "#000";
          break;
      }

      return (
        <span
          style={{
            padding: "5px 10px",
            color: "#fff",
            backgroundColor: color,
            border: `2px solid ${borderColor}`,
            borderRadius: "5px",
            textAlign: "center",
          }}
        >
          {params.value}
        </span>
      );
    },
  },

  {
    field: "type",
    headerName: "Transaction Type",
    width: 160,
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
        <Paper>
          <Box
            sx={{
              backgroundColor: "#f0e6ff",
              padding: 2,
              borderBottom: "2px solid #ccc",
            }}
          >
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

              <Select
                sx={{
                  textTransform: "none",
                  height: "30px",
                  minWidth: 30,
                  fontSize: "10px",
                }}
                variant="outlined"
                size="small"
                IconComponent={() => (
                  <Stack direction="column" fontSize="5px">
                    <KeyboardArrowUp fontSize="small" />
                    <KeyboardArrowDown fontSize="small" />
                  </Stack>
                )}
                defaultValue="Switch"
              >
                <MenuItem value="Switch">Switch</MenuItem>
              </Select>
            </Stack>
          </Box>

          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box sx={{ p: 2 }}>
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
        </Paper>

        <Paper>
          <Box
            sx={{
              backgroundColor: "#f0e6ff",
              padding: 2.6,
              borderBottom: "2px solid #ccc",
            }}
          >
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
        </Paper>

        <Paper>
          <Box
            sx={{
              backgroundColor: "#f0e6ff",
              padding: 2.6,
              borderBottom: "2px solid #ccc",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                display: "flex",
                alignItems: "center",
              }}
              fontWeight="bold"
              fontSize="small"
            >
              Expenses
            </Typography>
          </Box>

          <Box
            sx={{
              p: 2,
              display: "flex",
              justifyContent: "center",
              gap: 15,
              alignItems: "center",
            }}
          >
            <Box>
              <Typography>$0.00</Typography>
              <Typography>Income</Typography>
            </Box>
            <Box>
              <Typography>$0.00</Typography>
              <Typography>Expenses</Typography>
            </Box>
          </Box>

          <Box
            sx={{
              backgroundColor: "#ccc",
              margin: "10px",
              padding: "20px 30px",
              borderRadius: "10px",
            }}
          />

          <Box sx={{ p: 2, display: "flex", gap: "40px" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "5px",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "#7105E9",
                  height: "15px",
                  width: "15px",
                  borderRadius: "50%",
                }}
              />
              <Typography>Income</Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "5px",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "#7105E9",
                  height: "15px",
                  width: "15px",
                  borderRadius: "50%",
                }}
              />
              <Typography>Expenses</Typography>
            </Box>
          </Box>
        </Paper>
      </Grid2>

      <Box
        sx={{
          height: 400,
          marginTop: "30px",
          width: { xs: "100%", md: "900px" },
        }}
      >
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          disableRowSelectionOnClick
        ></DataGrid>
      </Box>
    </Box>
  );
}

export default Wallet;
