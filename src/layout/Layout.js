import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

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
          paddingTop: "70px",
          paddingRight: { xs: "600px", md: "700px" },
          overflowY: "auto",
          width: { xs: "100%", md: "100%" },
        }}
      >
        <Navbar onSidebarToggle={handleSidebarToggle} />
        {children}
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
