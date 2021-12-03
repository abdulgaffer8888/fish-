import {
  Button,
  CircularProgress,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory, useLocation } from "react-router";
import Footer from "../Shared/Footer/Footer";
import Navigation from "../Shared/Navigation/Navigation";
import betaimg from "../../images/batta.png";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";

export default function Registration() {
  const [logInData, setLoginData] = useState({});
  const { registerUser, error } = useAuth();

  // redirect to login page
  const location = useLocation();
  const history = useHistory();

  const handleRegistrationSubmit = e => {
    const nameLength = document.getElementById("reg_name").value.length;
    const emailLength = document.getElementById("reg_email").value.length;
    const passLength = document.getElementById("reg_pass").value.length;
    const pass2Length = document.getElementById("reg_pass2").value.length;

    if (
      emailLength === 0 ||
      passLength === 0 ||
      pass2Length === 0 ||
      nameLength === 0
    ) {
      Swal.fire({
        icon: "error",
        title: "Field must not be empty",
      });
    } else if (logInData.password !== logInData.repeat_password) {
      Swal.fire({
        icon: "error",
        title: "Password did not matched",
      });
    } else if (passLength < 6) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "password must be 6 digit long",
      });
    } else if (error) {
      Swal.fire({
        icon: "error",
        title: error,
      });
    } else {
      registerUser(
        logInData.email,
        logInData.password,
        logInData.name,
        location,
        history
      );
    }
    e.preventDefault();
  };
  const handleOnChange = e => {
    const value = e.target.value;
    const field = e.target.name;

    const newLoginData = { ...logInData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };

  return (
    <div>
      <Navigation />
      <Grid>
        <Grid item xs={12}>
          <img
            style={{
              width: "200px",
              margin: " 20px auto 0px",
              display: "block",
            }}
            src={betaimg}
            alt="betta"
          />
        </Grid>
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
            Registration Form
          </Typography>
          <form
            onSubmit={handleRegistrationSubmit}
            className="loginformsizecontrol"
            style={{ width: "500px" }}
          >
            <TextField
              style={{ width: "100%", marginBottom: "20px" }}
              id="reg_name"
              label="Name"
              type="text"
              name="name"
              variant="filled"
              onChange={handleOnChange}
            />
            <TextField
              style={{ width: "100%", marginBottom: "20px" }}
              id="reg_email"
              label="Email"
              type="email"
              name="email"
              variant="filled"
              onChange={handleOnChange}
            />
            <TextField
              style={{ width: "100%", marginBottom: "20px" }}
              id="reg_pass"
              label="Password"
              type="password"
              name="password"
              variant="filled"
              onChange={handleOnChange}
            />
            <TextField
              style={{ width: "100%" }}
              id="reg_pass2"
              label="Repeat password"
              type="password"
              name="repeat_password"
              variant="filled"
              onChange={handleOnChange}
            />
            <Typography
              variant="p"
              style={{
                marginTop: "10px",
                display: "block",
                color: "var(--body-text-color)",
              }}
            >
              Already have an account ?{" "}
              {
                <Link
                  style={{
                    textDecoration: "none",
                    color: "var(--primary-color)",
                  }}
                  to="/login"
                >
                  Login
                </Link>
              }
            </Typography>
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
              Registration
            </Button>
          </form>
          )
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
}
