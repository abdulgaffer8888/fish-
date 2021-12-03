import { Button, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Swal from "sweetalert2";

export default function Addaproduct() {
  const [addproduct, setAddproduct] = useState([]);

  const addproductsubmit = e => {
    e.preventDefault();
    const namelength = document.getElementById("name").value.length;
    const imagelength = document.getElementById("imglink").value.length;
    const pricelength = document.getElementById("price").value.length;
    const desclength = document.getElementById("desc").value.length;

    if (
      namelength === 0 ||
      imagelength === 0 ||
      pricelength === 0 ||
      desclength === 0
    ) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Field must not be empty",
      });
    } else {
      const products = { ...addproduct };
      fetch("https://thawing-earth-84952.herokuapp.com/addnewproduct", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(products),
      })
        .then(res => res.json())
        .then(data => {
          if (data.insertedId) {
            Swal.fire({
              icon: "success",
              title: "Success",
              text: "Product added successfull",
            });
            document.getElementById("name").value = " ";
            document.getElementById("imglink").value = " ";
            document.getElementById("price").value = " ";
            document.getElementById("desc").value = " ";
          }
        });
    }
  };
  const changeHandalar = e => {
    const name = e.target.name;
    const value = e.target.value;

    const newProduct = { ...addproduct };
    newProduct[name] = value;
    setAddproduct(newProduct);
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
            Add a product
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
            onSubmit={addproductsubmit}
            className="loginformsizecontrol"
            style={{ width: "500px" }}
          >
            <TextField
              onBlur={changeHandalar}
              style={{ width: "100%", marginBottom: "20px" }}
              id="name"
              label="Name"
              type="text"
              name="name"
              variant="filled"
            />
            <TextField
              onBlur={changeHandalar}
              style={{ width: "100%", marginBottom: "20px" }}
              id="imglink"
              label="Image url"
              type="text"
              name="image_url"
              variant="filled"
            />
            <TextField
              onBlur={changeHandalar}
              style={{ width: "100%", marginBottom: "20px" }}
              id="price"
              label="Price"
              type="number"
              name="price"
              variant="filled"
            />

            <TextareaAutosize
              minRows={6}
              name="desc"
              id="desc"
              onChange={changeHandalar}
              style={{
                width: "100%",
                color: "#333",
                margin: "auto",
                border: "1px solid lightgray",
                borderRadius: "3px",
                padding: "10px",
              }}
              placeholder="Product description"
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
              Set a product
            </Button>
          </form>
        </Grid>
      </Grid>
    </div>
  );
}
