import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Menu,
  MenuItem,
  Box,
} from "@mui/material";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import SyncAltRoundedIcon from "@mui/icons-material/SyncAltRounded";
import DescriptionRoundedIcon from "@mui/icons-material/DescriptionRounded";
import {
  ArrowDropDown,
  AutorenewRounded,
  RocketLaunchRounded,
} from "@mui/icons-material";
import { useLocation } from "react-router";

const actions = [
  { icon: <RocketLaunchRounded />, text: "Send Money" },
  { icon: <SyncAltRoundedIcon />, text: "Fund Wallet" },
  { icon: <AutorenewRounded />, text: "Convert Funds" },
  { icon: <DescriptionRoundedIcon />, text: "Create new invoice" },
];

const Navbar = ({ onSidebarToggle }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const location = useLocation();

  const getTitle = () => {
    switch (location.pathname) {
      case "/":
        return {
          title: "Welcome, Shedrack",
          subtitle: "Good morning, have a great day!",
        };
      case "/invoices":
        return { title: "Invoices" };
      case "/cards":
        return { title: "Cards" };
      case "/wallets":
        return { title: "Wallets" };
      case "/transactions":
        return { title: "Transactions" };
      default:
        return {
          title: "Welcome, Shedrack",
          subtitle: "Good morning, have a great day!",
        };
    }
  };

  const { title, subtitle } = getTitle();

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar
        position="fixed"
        color="transparent"
        elevation={0}
        sx={{
          boxShadow: "none",
          width: { xs: "100%", md: "78vw" },
        }}
      >
        <Toolbar
          sx={{ p: 1.2, mt: "5px", borderBottom: "2px solid #ccc" }}
          style={{ justifyContent: "space-between" }}
        >
          <Box>
            <Typography variant="h4">{title}</Typography>
            <Typography variant="body2" color="textSecondary">
              {subtitle}
            </Typography>
          </Box>

          <Box display="flex" gap={2} alignItems="center">
            <Button
              color="inherit"
              variant="outlined"
              startIcon={<ArrowDropDown />}
              onClick={handleMenuClick}
              sx={{
                textTransform: "none",
                border: "1px solid #ccc",
                padding: "5px 10px",
                borderRadius: "10px",
              }}
            >
              Quick Actions
            </Button>

            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              {actions.map((action) => (
                <Box sx={{ p: 1 }}>
                  <MenuItem
                    onClick={handleClose}
                    sx={{ borderBottom: "1px solid #ccc", gap: 1 }}
                  >
                    <Box sx={{ color: "#7105E9" }}>{action.icon}</Box>
                    {action.text}
                  </MenuItem>
                </Box>
              ))}
            </Menu>

            <IconButton sx={{ border: "1px solid #ccc", borderRadius: "50%" }}>
              <NotificationsRoundedIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
