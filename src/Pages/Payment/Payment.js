import { Box } from "@mui/system";
import React from "react";
import paymentimg from "../../images/paymentimg.png";
import Footer from "../Shared/Footer/Footer";
import Navigation from "../Shared/Navigation/Navigation";
import { Button, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";
export default function Payment() {
  return (
    <div>
      <Navigation />
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          <Container>
            <img src={paymentimg} alt="" />
            <Typography variant="h4" style={{ textAlign: "center" }}>
              Payment method is coming soon...
            </Typography>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Button
                style={{
                  backgroundColor: "var(--secondary-color)",
                  color: "white",
                  display: "block",
                  margin: " 40px auto",
                }}
              >
                Back to home
              </Button>
            </Link>
          </Container>
        </div>
      </Box>
      <Footer />
    </div>
  );
}
