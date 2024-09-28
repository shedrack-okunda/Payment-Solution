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
      <Navbar onSidebarToggle={handleSidebarToggle} />

      <Outlet />
    </Box>
  );
};

export default Layout;
