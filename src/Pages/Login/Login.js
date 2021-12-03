import React, { useState } from "react";
import { useHistory, useLocation } from "react-router";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import googleimg from "../../images/google_logo.png";
import "./Login.css";
import Navigation from "../Shared/Navigation/Navigation";
import Footer from "../Shared/Footer/Footer";
import betaimg from "../../images/batta.png";
import useAuth from "../../Hooks/useAuth";

export default function Login() {
  const { loginUser, handleGoogleSignIn } = useAuth();
  const [loginData, setLoginData] = useState({});
  const history = useHistory();
  const location = useLocation();

  const handleOnChange = e => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };

  const handleLoginSubmit = e => {
    loginUser(loginData.email, loginData.password, history, location);

    e.preventDefault();
  };

  ////////=======  Google
  const signInWithGoogle = e => {
    handleGoogleSignIn(history, location);
  };

  return (
    <>
      <Navigation />

      <div
        style={{
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          padding: "20px 0px",
        }}
      >
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
                margin: "30px 0px",
              }}
            >
              Please Login
            </Typography>
            <form
              onSubmit={handleLoginSubmit}
              className="loginformsizecontrol"
              style={{ width: "500px" }}
            >
              <TextField
                style={{ width: "100%", marginBottom: "20px" }}
                id="login_email"
                label="Email"
                type="email"
                name="email"
                variant="filled"
                onChange={handleOnChange}
              />
              <TextField
                style={{ width: "100%" }}
                id="login_pass"
                label="Password"
                type="password"
                name="password"
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
                New in Doctor Portal?{" "}
                {
                  <Link
                    style={{
                      textDecoration: "none",
                      color: "var(--primary-color)",
                    }}
                    to="/registration"
                  >
                    Please Registration
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
                Login{" "}
              </Button>
              <Typography
                style={{
                  display: "block",
                  textAlign: "center",
                  margin: "20px 0px",
                  color: "var(--body-text-color)",
                }}
                variant="p"
              >
                Or login by
              </Typography>
            </form>
            <Button
              onClick={signInWithGoogle}
              style={{
                margin: "auto",
                display: "block",
                borderRadius: "20px",
              }}
            >
              <img style={{ width: "40px" }} src={googleimg} alt="googleicon" />
            </Button>
          </Grid>
        </Grid>
      </div>
      <Footer />
    </>
  );
}
