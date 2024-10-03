import React, { useState } from "react";
import { Box, IconButton, Tab, Tabs, TextField } from "@mui/material";
import Search from "@mui/icons-material/Search";
import FilterList from "@mui/icons-material/FilterList";

function Invoice() {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box display="flex" alignItems="center">
          <TextField
            placeholder="Search for an invoice"
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
              width: "300px",
              marginRight: 2,
            }}
          />
          <IconButton sx={{ borderRadius: "10px", border: "1px solid #ddd" }}>
            <FilterList />
          </IconButton>
        </Box>
      </Box>

      <Tabs
        value={tabValue}
        onChange={handleTabChange}
        aria-label="invoice tabs"
        sx={{
          marginTop: 2,
          "& .MuiTab-root": { textTransform: "none", minWidth: 120 },
          "& .MuiTabs-indicator": { backgroundColor: "#8A56AC" },
        }}
      >
        <Tab label="All invoices" />
        <Tab label="Draft" />
        <Tab label="Pending" />
        <Tab label="Processing" />
        <Tab label="Paid" />
        <Tab label="Due" />
        <Tab label="Overdue" />
      </Tabs>
    </Box>
  );
}

export default Invoice;
