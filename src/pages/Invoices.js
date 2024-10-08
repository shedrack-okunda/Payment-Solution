import React, { useState } from "react";
import {
  Box,
  Button,
  Divider,
  IconButton,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";
import Search from "@mui/icons-material/Search";
import FilterList from "@mui/icons-material/FilterList";
import { ArrowForward } from "@mui/icons-material";
import DescriptionRounded from "@mui/icons-material/DescriptionRounded";

function Invoice() {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Box sx={{ p: 3 }}>
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

      <Box
        sx={{
          height: "350px",
          borderRadius: "10px",
          border: "1px solid #ccc",
          margin: "15px",
          width: { xs: "50%", md: "100%" },
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

        <Divider />

        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          mt={4}
        >
          <DescriptionRounded sx={{ fontSize: 50, mt: 3 }} />
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
              padding: "10px 70px",
            }}
          >
            New invoice <ArrowForward />
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Invoice;
