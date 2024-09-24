import React from "react";
import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import DescriptionRoundedIcon from "@mui/icons-material/DescriptionRounded";
import CreditCardRoundedIcon from "@mui/icons-material/CreditCardRounded";
import WalletRoundedIcon from "@mui/icons-material/WalletRounded";
import SyncAltRoundedIcon from "@mui/icons-material/SyncAltRounded";

const Sidebar = () => {
  const items = [
    { text: "Dashboard", icon: <DashboardRoundedIcon /> },
    { text: "Invoices", icon: <DescriptionRoundedIcon /> },
    { text: "Cards", icon: <CreditCardRoundedIcon /> },
    { text: "Wallets", icon: <WalletRoundedIcon /> },
    { text: "Transactions", icon: <SyncAltRoundedIcon /> },
  ];

  return (
    <Drawer variant="permanent" anchor="left" sx={{ width: 155 }}>
      <div style={{ padding: "28px", textAlign: "center" }}>
        <Typography variant="h6" component="div" style={{ fontWeight: "bold" }}>
          FinPay
        </Typography>
      </div>

      <Divider sx={{ backgroundColor: "#000", width: '100%', marginBottom: "20px" }} />

      <List>
        {items.map((item, index) => (
          <ListItem button key={index}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
