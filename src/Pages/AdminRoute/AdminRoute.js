import React from "react";
import { CircularProgress } from "@mui/material";
import { Redirect, Route } from "react-router";
import useAuth from "../../Hooks/useAuth";

export default function AdminRoute({ children, ...rest }) {
  const { user, isLoading, admin } = useAuth();
  if (isLoading) {
    return (
      <CircularProgress
        style={{ margin: "auto", display: "block", marginTop: "100px" }}
      />
    );
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email && admin ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
