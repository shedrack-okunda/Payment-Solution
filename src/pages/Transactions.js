import React from "react";
import { Box } from "@mui/material";

import Status from "../components/Status";
import SearchBar from "../components/Searchbar";

function Transaction() {
  return (
    <Box sx={{ p: 3 }}>
      <SearchBar />

      <Status />
    </Box>
  );
}

export default Transaction;
