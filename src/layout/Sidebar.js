import React from "react";
import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Box,
  Avatar,
  IconButton,
} from "@mui/material";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import DescriptionRoundedIcon from "@mui/icons-material/DescriptionRounded";
import CreditCardRoundedIcon from "@mui/icons-material/CreditCardRounded";
import WalletRoundedIcon from "@mui/icons-material/WalletRounded";
import SyncAltRoundedIcon from "@mui/icons-material/SyncAltRounded";
import { ExitToApp } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Sidebar = ({ isOpen, onSidebarToggle }) => {
  const items = [
    { text: "Dashboard", icon: <DashboardRoundedIcon />, path: "/" },
    { text: "Invoices", icon: <DescriptionRoundedIcon />, path: "/invoices" },
    { text: "Cards", icon: <CreditCardRoundedIcon />, path: "/cards" },
    { text: "Wallets", icon: <WalletRoundedIcon />, path: "/wallets" },
    {
      text: "Transactions",
      icon: <SyncAltRoundedIcon />,
      path: "/transactions",
    },
  ];

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        width: 155,

        flexShrink: 0,
        display: { xs: "none", md: "block" },
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          backgroundColor: "#7105E9",
          borderTopRightRadius: "20px",
          borderBottomRightRadius: "20px",
          color: "#fff",
        },
      }}
    >
      <Box sx={{ padding: "23px", textAlign: "center" }}>
        <Typography variant="h4" component="div" style={{ fontWeight: "bold" }}>
          FinPay
        </Typography>
      </Box>

      <Divider sx={{ backgroundColor: "#ccc", marginBottom: "20px" }} />

      <List>
        {items.map((item, index) => (
          <ListItem
            button
            key={index}
            sx={{
              cursor: "pointer",
            }}
          >
            <Link
              to={item.path}
              style={{
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <ListItemIcon sx={{ color: "#fff" }}>{item.icon} </ListItemIcon>
              <ListItemText sx={{ color: "#fff" }}>{item.text}</ListItemText>
            </Link>
          </ListItem>
        ))}
      </List>

      <Divider sx={{ backgroundColor: "#fff", marginTop: "auto" }} />

      <Box
        sx={{
          display: "flex",
          padding: "10px",
          textAlign: "center",
          color: "#fff",
        }}
      >
        <Avatar
          alt="Sheddy"
          src=""
          sx={{ width: 40, height: 40, margin: "0 auto" }}
        />
        <Box sx={{ marginBottom: "10px" }}>
          <Typography
            sx={{ fontWeight: "bold", marginRight: "40px" }}
            variant="body1"
          >
            Shedrack Okunda
          </Typography>
          <Typography sx={{ marginLeft: "10px" }} variant="body2">
            okundashedarck@gmail.com
          </Typography>
        </Box>

        <IconButton sx={{ color: "#fff", marginBottom: "15px" }}>
          <ExitToApp />
        </IconButton>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
