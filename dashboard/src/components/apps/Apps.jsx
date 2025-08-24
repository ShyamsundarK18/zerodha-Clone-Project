import React from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";

const apps = [
  {
    name: "Kite",
    description: "Trade stocks with live data and charts",
    icon: "./icons/kite-icon.png",
    link: "https://kite.zerodha.com",
  },
  {
    name: "Coin",
    description: "Invest in mutual funds commission-free",
    icon: "./icons/coinweb.png",
    link: "https://coin.zerodha.com",
  },
  {
    name: "Console",
    description: "View reports, statements, and analytics",
    icon: "./icons/console.png",
    link: "https://console.zerodha.com",
  },
  {
    name: "Varsity",
    description: "Learn stock market fundamentals",
    icon: "./icons/logo.png",
    link: "https://zerodha.com/varsity",
  },
];

function Apps() {
  return (
    <Grid container spacing={3} padding={4}>
      {apps.map((app, index) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
          <Card
            style={{ width: "270px" }}
            elevation={3}
            sx={{
              transition: "0.3s",
              "&:hover": {
                transform: "scale(1.03)",
                boxShadow: "2px 1px 10px rgb(250, 118, 78)",
              },
            }}
          >
            <CardContent>
              <Typography variant="h5" component="div">
                <img
                  src={app.icon}
                  alt={app.name}
                  style={{ width: "20%", height: "30px" }}
                />
                <br />
                <span style={{ marginTop: "0px" }}>{app.name}</span>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {app.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                href={app.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Open
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default Apps;
