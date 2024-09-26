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
import { ArrowDropDown } from "@mui/icons-material";

const Navbar = () => {
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
          width: "78vw",
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
      >
        <Toolbar sx={{ mt: "5px" }} style={{ justifyContent: "space-between" }}>
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
              <MenuItem onClick={handleClose}>Send Money</MenuItem>
              <Divider sx={{ backgroundColor: "#ccc", margin: "5px" }} />
              <MenuItem onClick={handleClose}>
                <SyncAltRoundedIcon sx={{ color: "#7105E9", margin: "0px" }} />
                Fund Wallet
              </MenuItem>
              <Divider sx={{ backgroundColor: "#ccc", margin: "5px" }} />
              <MenuItem onClick={handleClose}>Convert Funds</MenuItem>
              <Divider sx={{ backgroundColor: "#ccc", margin: "5px" }} />
              <MenuItem sx={{ mr: "10px" }} onClick={handleClose}>
                <DescriptionRoundedIcon
                  sx={{ margin: "0px", color: "#7105E9" }}
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
