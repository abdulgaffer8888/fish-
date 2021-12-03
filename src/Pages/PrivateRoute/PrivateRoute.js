import { CircularProgress } from "@mui/material";
import { Redirect, Route } from "react-router";
import useAuth from "../../Hooks/useAuth";

export default function PrivateRoute({ children, ...rest }) {
  const { user, isLoading } = useAuth();
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
        user.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
