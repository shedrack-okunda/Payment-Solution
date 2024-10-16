import { FilterList, Search } from "@mui/icons-material";
import { Box, IconButton, TextField, Typography } from "@mui/material";
import React from "react";

const SearchBar = () => {
  return (
    <Box>
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
    </Box>
  );
};

export default SearchBar;
