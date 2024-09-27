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
import { CloseRounded, ExitToApp } from "@mui/icons-material";

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
    <>
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
          <Typography
            variant="h4"
            component="div"
            style={{ fontWeight: "bold" }}
          >
            FinPay
          </Typography>
        </Box>

        <Divider sx={{ backgroundColor: "#ccc", marginBottom: "20px" }} />

        <List>
          {items.map((item, index) => (
            <ListItem button key={index}>
              <ListItemIcon sx={{ color: "#fff" }}>{item.icon} </ListItemIcon>
              <ListItemText>{item.text}</ListItemText>
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

      <Drawer
        variant="temporary"
        anchor="left"
        open={isOpen}
        onClose={onSidebarToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          width: 155,
          flexShrink: 0,
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            backgroundColor: "#7105E9",
            borderTopRightRadius: "20px",
            borderBottomRightRadius: "20px",
            color: "#fff",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            padding: "5px",
          }}
        >
          <IconButton onClick={onSidebarToggle}>
            <CloseRounded sx={{ color: "#fff" }} />
          </IconButton>
        </Box>

        <Box sx={{ padding: "23px", textAlign: "center" }}>
          <Typography
            variant="h4"
            component="div"
            style={{ fontWeight: "bold" }}
          >
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
              <ListItemIcon sx={{ color: "#fff" }}>{item.icon} </ListItemIcon>
              <ListItemText>{item.text}</ListItemText>
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
    </>
  );
};

export default Sidebar;
