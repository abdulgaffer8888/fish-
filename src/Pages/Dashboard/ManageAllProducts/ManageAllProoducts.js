import { Button, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

export default function ManageAllProoducts() {
  const [allorders, setAllorders] = useState([]);

  useEffect(() => {
    const uri = "https://thawing-earth-84952.herokuapp.com/allorders";
    fetch(uri)
      .then(res => res.json())
      .then(data => setAllorders(data));
  }, []);

  return (
    <div>
      <Grid container style={{ marginTop: "80px", justifyContent: "center" }}>
        {allorders.map(orders => (
          <Grid
            key={orders._id}
            item
            xs={12}
            sm={8}
            style={{
              border: "1px solid lightgray",
              padding: "20px",
              borderRadius: "10px",
              marginTop: "20px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <img
                style={{
                  width: "200px",
                  borderRadius: "4px",
                }}
                src={orders.productImage}
                alt=""
              />
              <div style={{ marginLeft: "15px" }}>
                <Typography variant="h5">{orders.productName}</Typography>
                <Typography variant="h5">${orders.productPrice}</Typography>
                <Typography variant="p">{orders.productDesc}</Typography>
              </div>
            </div>
            <Typography
              variant="h5"
              style={{ margin: "30px 0px 10px" }}
              color="var(--primary-color)"
            >
              Customer info
            </Typography>
            <Typography variant="p">Name : {orders.userName}</Typography> <br />
            <Typography variant="p">Email : {orders.email}</Typography>
            <br />
            <Typography variant="p">Date : {orders.date}</Typography> <br />
            <Typography variant="p">address : {orders.fulladdress}</Typography>
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
                style={{
                  backgroundColor: "var(--primary-color)",
                  color: "white",
                  marginRight: "10px",
                }}
              >
                Delete
              </Button>
              <Button
                size="small"
                style={{
                  backgroundColor: "var(--secondary-color)",
                  color: "white",
                  marginRight: "10px",
                }}
              >
                Accept
              </Button>
              <Typography
                variant="p"
                style={{ color: "var(--secondary-color)", marginRight: "15px" }}
              >
                {orders.status}...
              </Typography>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
