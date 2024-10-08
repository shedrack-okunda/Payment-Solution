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
    <Box display="flex" sx={{ display: "flex" }}>
      <Sidebar
        setSidebarWidth={setSidebarWidth}
        isOpen={isSidebarOpen}
        onSidebarToggle={handleSidebarToggle}
      />

      <Box
        component="main"
        sx={{
          paddingTop: "80px",
          marginLeft: { xs: "1px", md: `${sidebarWidth}px` },
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
