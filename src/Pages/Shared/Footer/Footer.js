import { Container, Grid } from "@mui/material";
import React from "react";
import Typography from "@mui/material/Typography";

export default function Footer() {
  return (
    <div style={{ backgroundColor: "var(--third-color)", marginTop: "80px" }}>
      <Container>
        <Grid
          sx={{ color: "white", p: 4 }}
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 12, md: 12 }}
        >
          <Grid item xs={2} sm={4} md={3}>
            <Typography sx={{ m: 2 }} variant="p" component="div">
              Emergincey care
            </Typography>
            <Typography sx={{ m: 2 }} variant="p" component="div">
              Home service
            </Typography>
            <Typography sx={{ m: 2 }} variant="p" component="div">
              Aquarum fish
            </Typography>
            <Typography sx={{ m: 2 }} variant="p" component="div">
              Free 2
            </Typography>
            <Typography sx={{ m: 2 }} variant="p" component="div">
              free food
            </Typography>
          </Grid>
          <Grid item xs={2} sm={4} md={3}>
            <Typography
              sx={{ m: 2, color: "var(--primary-color)", fontWeight: "bold" }}
              component="div"
            >
              Food Quality
            </Typography>
            <Typography sx={{ m: 2 }} variant="p" component="div">
              High protine food
            </Typography>
            <Typography sx={{ m: 2 }} variant="p" component="div">
              breeder
            </Typography>
            <Typography sx={{ m: 2 }} variant="p" component="div">
              Dry food
            </Typography>
            <Typography sx={{ m: 2 }} variant="p" component="div">
              Mix food
            </Typography>
            <Typography sx={{ m: 2 }} variant="p" component="div">
              Variation
            </Typography>
          </Grid>

          <Grid item xs={2} sm={4} md={3}>
            <Typography
              sx={{ m: 2, color: "var(--primary-color)", fontWeight: "bold" }}
              component="div"
            >
              Fish Quality
            </Typography>
            <Typography sx={{ m: 2 }} variant="p" component="div">
              Fresh water
            </Typography>
            <Typography sx={{ m: 2 }} variant="p" component="div">
              water cleaner
            </Typography>
            <Typography sx={{ m: 2 }} variant="p" component="div">
              breeder
            </Typography>
            <Typography sx={{ m: 2 }} variant="p" component="div">
              5 colors
            </Typography>
            <Typography sx={{ m: 2 }} variant="p" component="div">
              Long size
            </Typography>
          </Grid>
          <Grid item xs={2} sm={4} md={3}>
            <Typography
              sx={{ m: 2, color: "var(--primary-color)", fontWeight: "bold" }}
              component="div"
            >
              Connect with us
            </Typography>
            <Typography sx={{ m: 2 }} variant="p" component="div">
              You can ealisy connect with us by following
            </Typography>
            <Typography
              style={{
                color: "var(--primary-color)",

                gap: "15px",
                fontSize: "26px",
                margin: "20px 0px 0px 10px",
              }}
            >
              <Typography
                variant="p"
                style={{ fontSize: "15px", display: "block" }}
              >
                Facebook
              </Typography>{" "}
              <Typography
                variant="p"
                style={{ fontSize: "15px", display: "block" }}
              >
                Linkdin
              </Typography>
              <Typography
                variant="p"
                style={{ fontSize: "15px", display: "block" }}
              >
                Twitter
              </Typography>
            </Typography>
          </Grid>
        </Grid>
        <Typography
          style={{ color: "white", textAlign: "center", paddingBottom: "30px" }}
        >
          Copyright &copy; 2021. All rights reserved Aqua
        </Typography>
      </Container>
    </div>
  );
}
