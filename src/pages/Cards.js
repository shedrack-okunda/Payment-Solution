import { CreditCard } from "@mui/icons-material";
import { Box, Button, Paper, Typography } from "@mui/material";
import React from "react";

function Card() {
  return (
    <Box sx={{ p: 4 }}>
      <Paper>
        <Box>
          <Box
            sx={{
              p: 2,
              borderBottom: "2px solid #ccc",
              backgroundColor: "#f0e6ff",
            }}
          >
            <Typography>Cards</Typography>
          </Box>

          <img src={require("./card.png")} alt="card" height="310px" />
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button
              variant="contained"
              sx={{
                padding: "10px 50px",
                marginBottom: "20px",
                backgroundColor: "#7105E9",
                margin: "20px",
                width: "100%",
                textTransform: "none",
                fontWeight: 600,
                fontSize: "18px",
              }}
              startIcon={<CreditCard />}
            >
              Create new card
            </Button>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}

export default Card;
