import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import bannerimg from "../../../images/bannerimg.png";

export default function Banner() {
  return (
    <div>
      <Container>
        <Grid
          container
          style={{
            marginTop: "80px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Grid item xs={12} sm={7}>
            <Typography
              variant="h2"
              style={{
                fontWeight: "500",
              }}
            >
              <span style={{ color: "var(--primary-color)", fontSize: "40px" }}>
                Betta
              </span>{" "}
              <br /> Fish Lover{" "}
              <span
                style={{
                  color: "var(--primary-color)",
                  fontSize: "90px",
                  lineHeight: "20px",
                }}
              >
                ?
              </span>{" "}
            </Typography>
            <Typography
              variant="p"
              style={{
                marginTop: "20px",
                display: "block",
                fontWeight: "400",
                width: "90%",
              }}
            >
              We provide the best quality betta fish in the world. Siamese
              fighting fish are endemic to the central plain of Thailand and
              have been domesticated for at least 1,000 years, among the longest
              of any fish. They were initially bred for aggression and subject
              to gambling matches akin to cockfighting.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <img style={{ width: "100%" }} src={bannerimg} alt="betta fish" />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
