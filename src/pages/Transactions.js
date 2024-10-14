import React from "react";
import { Box, IconButton, TextField, Typography } from "@mui/material";
import { FilterList, Search } from "@mui/icons-material";
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
  { field: "status", headerName: "Status", width: 110, editable: true },

  {
    field: "type",
    headerName: "Transaction Type",
    width: 160,
  },
];

function Transaction() {
  return (
    <Box component="div" sx={{ p: 3 }}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box
          sx={{
            margin: "15px",
            display: "flex",
            alignItems: "center",
            gap: 2,
            width: "100%",
          }}
        >
          <TextField
            placeholder="Search for a transaction"
            InputProps={{
              startAdornment: (
                <IconButton>
                  <Search />
                </IconButton>
              ),
            }}
            sx={{
              backgroundColor: "#f9f9f9",
              borderRadius: "8px",
              width: { xs: "30%", md: "100%" },
            }}
          />
          <IconButton
            sx={{
              borderRadius: "10px",
              height: "55px",
              padding: "10px 30px",
              border: "1px solid #ddd",
              width: { xs: "auto", md: "auto" },
            }}
          >
            <Typography sx={{ mr: "2px" }}>Filter</Typography>
            <FilterList />
          </IconButton>
        </Box>
      </Box>

      <Box sx={{ height: 400, width: { xs: "100%", md: "900px" } }}>
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

      {/* <Typography variant="h6" mb={2}>
        Recent Transactions
      </Typography> */}
    </Box>
  );
}

export default Transaction;
