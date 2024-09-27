import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Menu,
  MenuItem,
  Divider,
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
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = ({ onSidebarToggle }) => {
  const [anchorEl, setAnchorEl] = useState(null);

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
        <Toolbar sx={{ mt: "5px" }} style={{ justifyContent: "space-between" }}>
          <IconButton
            edge="start"
            aria-label="menu"
            onClick={onSidebarToggle}
            sx={{ display: { xs: "inline-flex", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Box>
            <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
              Welcome, Shedrack
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Good morning, have a great day!
            </Typography>
          </Box>

          <Box display="flex" alignItems="center">
            <Button
              color="inherit"
              variant="outlined"
              startIcon={<ArrowDropDown />}
              onClick={handleMenuClick}
              sx={{
                border: "1px solid #ccc",
                padding: "8px 16px",
                borderRadius: "10px",
                marginRight: "10px",
              }}
            >
              Quick Actions
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>
                <RocketLaunchRounded
                  sx={{ marginRight: "10px", color: "#7105E9" }}
                />
                Send Money
              </MenuItem>
              <Divider sx={{ backgroundColor: "#ccc", margin: "5px" }} />
              <MenuItem onClick={handleClose}>
                <SyncAltRoundedIcon
                  sx={{ color: "#7105E9", marginRight: "10px" }}
                />
                Fund Wallet
              </MenuItem>
              <Divider sx={{ backgroundColor: "#ccc", margin: "5px" }} />
              <MenuItem onClick={handleClose}>
                {" "}
                <AutorenewRounded
                  sx={{ marginRight: "10px", color: "#7105E9" }}
                />
                Convert Funds
              </MenuItem>
              <Divider sx={{ backgroundColor: "#ccc", margin: "5px" }} />
              <MenuItem sx={{ mr: "10px" }} onClick={handleClose}>
                <DescriptionRoundedIcon
                  sx={{ marginRight: "10px", color: "#7105E9" }}
                />
                Create new invoice
              </MenuItem>
            </Menu>

            <IconButton sx={{ border: "1px solid #ccc", borderRadius: "50%" }}>
              <NotificationsRoundedIcon />
            </IconButton>
          </Box>
        </Toolbar>
        <Divider sx={{ mt: "19px", backgroundColor: "#ccc" }} />
      </AppBar>
    </>
  );
};

export default Navbar;
