import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { Box } from "@mui/material";

const Layout = ({ children }) => {
  const [sidebarWidth, setSidebarWidth] = useState(155);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Box display="flex" sx={{ minHeight: "90vh", overflowX: "hidden" }}>
      <Sidebar
        setSidebarWidth={setSidebarWidth}
        isOpen={isSidebarOpen}
        onSidebarToggle={handleSidebarToggle}
      />

      <Box
        component="main"
        sx={{
          marginTop: "30px",
          marginLeft: { xs: 0, md: "150px" },
          transition: "margin-left 0.3s ease",
          flexGrow: 1,
          padding: "10px",
          ml: `${sidebarWidth}px`,
        }}
      >
        <Navbar onSidebarToggle={handleSidebarToggle} />
        <Box sx={{ mt: "30px", padding: "10px", overflowY: "auto" }}>
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
