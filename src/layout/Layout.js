import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { Box } from "@mui/material";

function Layout({ children }) {
  return (
    <Box display="flex">
      <Sidebar />

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Navbar />
        {children}
      </Box>
    </Box>
  );
}

export default Layout;
