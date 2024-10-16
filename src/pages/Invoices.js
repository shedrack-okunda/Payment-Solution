import React, { useState } from "react";
import { Box, Button, Paper, Tab, Tabs, Typography } from "@mui/material";

import { ArrowForward } from "@mui/icons-material";
import DescriptionRounded from "@mui/icons-material/DescriptionRounded";
import SearchBar from "../components/Searchbar";

function Invoice() {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Box>
        <SearchBar />
      </Box>

      <Paper sx={{ width: { xs: "50%", md: "100%" } }}>
        <Box
          sx={{
            borderBottom: "2px solid #ddd",
            backgroundColor: "#ccc",
          }}
        >
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

        <Box
          sx={{
            p: 3,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <DescriptionRounded sx={{ fontSize: "5rem", mt: 3 }} />
          <Typography variant="h4" sx={{ marginTop: 1, fontWeight: "bold" }}>
            No payments
          </Typography>
          <Typography
            color="textSecondary"
            sx={{ textAlign: "center", marginTop: 1 }}
          >
            Once you have any payment, the information appears here
          </Typography>

          <Button
            variant="contained"
            sx={{
              backgroundColor: "#7105E9",
              fontWeight: "bold",
              color: "#fff",
              borderRadius: "10px",
              marginTop: 3,
              textTransform: "none",
              padding: "10px 100px",
            }}
            endIcon={<ArrowForward />}
          >
            New invoice
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}

export default Invoice;
