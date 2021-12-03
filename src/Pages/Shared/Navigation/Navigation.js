import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Logout from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";
import { Button, Container, Divider } from "@mui/material";
import "./Navigation.css";
import useAuth from "../../../Hooks/useAuth";
import PaymentIcon from "@mui/icons-material/Payment";
import StoreIcon from "@mui/icons-material/Store";
import ReviewsIcon from "@mui/icons-material/Reviews";
import FaceRetouchingNaturalIcon from "@mui/icons-material/FaceRetouchingNatural";

export default function Navigation() {
  const { user, logoutUser, admin } = useAuth();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <React.Fragment>
      <div style={{ borderBottom: "1px solid lightgray" }}>
        <Container>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Link to="/">
              <Typography sx={{ minWidth: 100 }}>Home</Typography>
            </Link>
            <Link to="/explore">
              <Typography sx={{ minWidth: 100 }}>explore</Typography>
            </Link>
            {user?.email ? (
              <Button onClick={logoutUser}>LogOut</Button>
            ) : (
              <Link to="/login">
                <Typography sx={{ minWidth: 100 }}>Login</Typography>
              </Link>
            )}

            <Tooltip title="Account settings" style={{ marginLeft: "auto" }}>
              <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }}>
                <Avatar sx={{ width: 32, height: 32 }}>
                  <FaceRetouchingNaturalIcon />
                </Avatar>
              </IconButton>
            </Tooltip>
          </Box>
        </Container>
      </div>
      {user.email && (
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&:before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <MenuItem>
            <Avatar />
            <Link to="/" style={{ textDecoration: "none" }}>
              {user.displayName}
            </Link>
          </MenuItem>
          <Divider />
          {admin && (
            <MenuItem>
              <ListItemIcon>
                <DashboardIcon fontSize="small" />
              </ListItemIcon>
              <Link to="/dashboard" style={{ textDecoration: "none" }}>
                Dashboard
              </Link>
            </MenuItem>
          )}

          <MenuItem>
            <ListItemIcon>
              <PaymentIcon fontSize="small" />
            </ListItemIcon>
            <Link to="/payment" style={{ textDecoration: "none" }}>
              Payment
            </Link>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <StoreIcon fontSize="small" />
            </ListItemIcon>
            <Link to="/myorders" style={{ textDecoration: "none" }}>
              My orders
            </Link>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <ReviewsIcon fontSize="small" />
            </ListItemIcon>
            <Link to="/review" style={{ textDecoration: "none" }}>
              Review
            </Link>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            <Link
              to="/login"
              onClick={logoutUser}
              style={{ textDecoration: "none" }}
            >
              Logout
            </Link>
          </MenuItem>
        </Menu>
      )}
    </React.Fragment>
  );
}
