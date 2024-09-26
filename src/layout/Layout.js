import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { Box } from "@mui/material";

const Layout = ({ children }) => {
  const [sidebarWidth, setSidebarWidth] = useState(155);

  return (
    <Box display="flex" sx={{ minHeight: "90vh", overflowX: "hidden" }}>
      <Sidebar setSidebarWidth={setSidebarWidth} />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          padding: "15px",
          ml: `${sidebarWidth}px`,
        }}
      >
        <Navbar />
        <Box sx={{ mt: "70px", padding: "15px", overflowY: "auto" }}>
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
