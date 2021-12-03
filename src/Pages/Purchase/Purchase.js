import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import Footer from "../Shared/Footer/Footer";
import Navigation from "../Shared/Navigation/Navigation";

export default function Purchase() {
  const history = useHistory();
  const { id } = useParams();
  const [singleProduct, setSingleProduct] = useState({});
  const { user } = useAuth();
  useEffect(() => {
    const uri = `https://thawing-earth-84952.herokuapp.com/allproducts/${id}`;
    fetch(uri)
      .then(res => res.json())
      .then(data => setSingleProduct(data));
  }, []);
  //----------------------------------------
  //
  const initialProductInfo = {
    userName: user.displayName,
    email: user.email,
    status: "pending",
  };
  const [productInfo, setProductInfo] = useState(initialProductInfo);

  //
  const handleOnSubmitProduct = e => {
    fetch("https://thawing-earth-84952.herokuapp.com/completePurches", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(completePurchase),
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          Swal.fire("Thank you", "Your order is under review", "success");
        }
        const destination = "/explore";
        history.replace(destination);
      });

    e.preventDefault();
  };

  const completePurchase = {
    ...productInfo,
    productImage: singleProduct.image_url,
    productName: singleProduct.name,
    productDesc: singleProduct.desc,
    productPrice: singleProduct.price,
  };

  const handleOnBlur = e => {
    const field = e.target.name;
    const value = e.target.value;
    const newProduct = { ...productInfo };
    newProduct[field] = value;
    setProductInfo(newProduct);
  };

  //----------------------------------------
  return (
    <div>
      <Navigation />
      <Typography
        variant="h4"
        style={{ textAlign: "center", margin: "80px 0px 20px" }}
      >
        Complete your order please
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
      <Container>
        <Grid
          container
          spacing={3}
          style={{
            marginTop: "80px",
          }}
        >
          <Grid item xs={12} sm={6}>
            <img
              style={{ width: "100%", borderRadius: "5px" }}
              src={singleProduct.image_url}
              alt="image1"
            />
            <Typography variant="h6">{singleProduct.name}</Typography>
            <Typography variant="h5" style={{ color: "red" }}>
              ${singleProduct.price}
            </Typography>
            <Typography
              variant="p"
              style={{ marginTop: "10px", display: "block" }}
            >
              {singleProduct.desc}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box>
              <form onSubmit={handleOnSubmitProduct}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    "& > :not(style)": { m: 1 },
                  }}
                >
                  <TextField
                    onBlur={handleOnBlur}
                    name="userName"
                    disabled
                    style={{ width: "100%" }}
                    label="Name"
                    defaultValue={user.displayName}
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    "& > :not(style)": { m: 1 },
                  }}
                >
                  <TextField
                    onBlur={handleOnBlur}
                    name="phone"
                    style={{ width: "100%" }}
                    label="Phone Number"
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    "& > :not(style)": { m: 1 },
                  }}
                >
                  <TextField
                    onBlur={handleOnBlur}
                    name="email"
                    style={{ width: "100%" }}
                    label="Email"
                    disabled
                    defaultValue={user.email}
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    "& > :not(style)": { m: 1 },
                  }}
                >
                  <TextField
                    onBlur={handleOnBlur}
                    name="date"
                    style={{ width: "100%" }}
                    type="date"
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    "& > :not(style)": { m: 1 },
                  }}
                >
                  <TextField
                    onBlur={handleOnBlur}
                    style={{ width: "100%", color: "lightgray" }}
                    placeholder="Full Address"
                    name="fulladdress"
                  />
                </Box>

                <Button
                  type="submit"
                  variant="contained"
                  style={{
                    backgroundColor: "var(--secondary-color)",
                    fontWeight: "bold",
                    float: "right",
                    margin: "12px",
                  }}
                >
                  Complete purchase
                </Button>
              </form>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </div>
  );
}
