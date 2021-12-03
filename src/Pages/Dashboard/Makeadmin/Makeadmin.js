import { Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
import Swal from "sweetalert2";

export default function Makeadmin() {
  const [email, setEmail] = useState("");
  const adminhandaler = e => {
    const user = { email };
    fetch("https://thawing-earth-84952.herokuapp.com/users/makeamdin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      });
    e.preventDefault();
  };

  const blurHandaler = e => {
    setEmail(e.target.value);
  };

  return (
    <div>
      <Grid>
        <Grid item xs={12} style={{ margin: "auto", display: "block" }}>
          {" "}
          <Typography
            variant="h4"
            style={{
              textAlign: "center",
              color: "var(--primary-color)",
              fontWeight: "bold",
              margin: "20px 0px",
            }}
          >
            Make Admin
          </Typography>
          <div
            style={{
              width: "150px",
              height: "4px",
              backgroundColor: "var(--primary-color)",
              margin: " 0px auto 80px",
              display: "block",
              borderRadius: "10px",
            }}
          ></div>
          <form
            className="loginformsizecontrol"
            onSubmit={adminhandaler}
            style={{ width: "500px" }}
          >
            <TextField
              onBlur={blurHandaler}
              style={{ width: "100%", marginBottom: "20px" }}
              id="email"
              label="Email"
              type="email"
              name="email"
              variant="filled"
            />

            <Button
              variant="contained"
              type="submit"
              style={{
                backgroundColor: "var(--secondary-color)",
                fontWeight: "bold",
                display: "block",
                margin: "40px auto 0px",
                width: "150px",
              }}
            >
              make admin
            </Button>
          </form>
        </Grid>
      </Grid>
    </div>
  );
}
