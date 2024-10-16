import React from "react";
import { Box, Button, IconButton, TextField, Typography } from "@mui/material";
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
  {
    field: "status",
    headerName: "Status",
    width: 150,
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
        <Button
          sx={{
            textTransform: "none",
            padding: "5px 15px",
            color: "#fff",
            backgroundColor: color,
            border: `2px solid ${borderColor}`,
            borderRadius: "30px",
          }}
        >
          {params.value}
        </Button>
      );
    },
  },

  {
    field: "type",
    headerName: "Transaction Type",
    width: 160,
  },
];

function Transaction() {
  return (
    <Box sx={{ p: 3 }}>
      <Box
        sx={{
          marginTop: "15px",
          marginBottom: "30px",
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
            borderRadius: "10px",
            width: { xs: "50%", md: "100%" },
          }}
        />
        <IconButton
          sx={{
            borderRadius: "10px",
            height: "55px",
            padding: "10px 10px",
            border: "1px solid #ddd",
            width: { xs: "auto", md: "auto" },
          }}
        >
          <Typography variant="body2" sx={{ mr: "2px" }}>
            Filter
          </Typography>
          <FilterList />
        </IconButton>
      </Box>

      <Box sx={{ height: 400, width: { xs: "100%", md: "100%" } }}>
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

export default Transaction;
