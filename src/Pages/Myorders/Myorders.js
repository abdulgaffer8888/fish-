import { Button, Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Footer from "../Shared/Footer/Footer";
import Navigation from "../Shared/Navigation/Navigation";
import useAuth from "../../Hooks/useAuth";

export default function Myorders() {
  const [myproduct, setMyproduct] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    const uri = `https://thawing-earth-84952.herokuapp.com/myorders?email=${user.email}`;
    fetch(uri)
      .then(res => res.json())
      .then(data => setMyproduct(data));
  }, []);

  /////===================
  const deleteHandaler = e => {
    myproduct.map(product => {
      return console.log(product._id);
    });
  };

  return (
    <div>
      <Navigation />
      <Container>
        <Typography
          variant="h4"
          style={{ textAlign: "center", margin: "80px 0px 20px" }}
        >
          My Orders
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
          className="underheading"
        ></div>
        <Grid container style={{ marginTop: "80px", justifyContent: "center" }}>
          {myproduct.map(product => (
            <Grid
              key={product._id}
              item
              xs={12}
              sm={8}
              style={{
                display: "flex",
                marginTop: "20px",
                border: "1px solid lightgray",
                padding: "20px",
                borderRadius: "10px",
              }}
            >
              <img
                style={{ width: "200px" }}
                src={product.productImage}
                alt=""
              />
              <div style={{ marginLeft: "20px" }}>
                <Typography variant="h5">{product.productName}</Typography>
                <Typography variant="h5" color="var(--primary-color)">
                  ${product.productPrice}
                </Typography>
                <Typography variant="p">{product.productDesc}</Typography>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "right",
                    alignItems: "center",
                    marginTop: "20px",
                  }}
                >
                  <Button
                    size="small"
                    onClick={deleteHandaler}
                    style={{
                      backgroundColor: "var(--primary-color)",
                      color: "white",
                      marginRight: "10px",
                    }}
                  >
                    Delete order
                  </Button>
                  <Typography
                    variant="p"
                    style={{
                      display: "block",
                      color: "var(--secondary-color)",
                    }}
                  >
                    Order processing..
                  </Typography>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Footer />
    </div>
  );
}
