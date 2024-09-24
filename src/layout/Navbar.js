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
} from "@mui/material";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
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
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar style={{ justifyContent: "space-between" }}>
          <div>
            <Typography variant="h5">Welcome, Shedrack</Typography>
            <Typography variant="body2" color="textSecondary">
              Good morning, have a great day!
            </Typography>
          </div>

          <div>
            <Button
              color="inherit"
              startIcon={<ArrowDropDown />}
              onClick={handleMenuClick}
            >
              Quick Actions
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Action 1</MenuItem>
              <MenuItem onClick={handleClose}>Action 2</MenuItem>
              <MenuItem onClick={handleClose}>Action 3</MenuItem>
              <MenuItem onClick={handleClose}>Action 4</MenuItem>
            </Menu>

            <IconButton color="inherit">
              <NotificationsRoundedIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <Divider sx={{ marginBottom: "20px", backgroundColor: "#000" }} />
    </>
  );
};

export default Navbar;
