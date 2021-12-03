import {
  Button,
  CardActions,
  CircularProgress,
  Container,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import Navigation from "../../Pages/Shared/Navigation/Navigation";
import Footer from "../../Pages/Shared/Footer/Footer";
import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";

export default function Explore() {
  const [products, setProducts] = useState([]);
  const [isData, setIsdata] = useState(false);

  useEffect(() => {
    fetch("https://thawing-earth-84952.herokuapp.com/allproducts")
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setIsdata(true);
      });
  }, []);
  return (
    <div>
      <Navigation />
      <Container>
        <Typography
          variant="h4"
          style={{ textAlign: "center", margin: "80px 0px 20px" }}
        >
          Explore Our All products
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
        {/* ######################## 

        Our popular prodcuts showing

         ######################## */}

        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {!isData && (
            <CircularProgress style={{ display: "block", margin: "auto" }} />
          )}
          {products.map((product, index) => (
            <Grid item xs={4} sm={4} md={4} key={index}>
              <Card
                sx={{ Width: "100%" }}
                style={{ boxShadow: "3px 4px 10px #10715d2e" }}
              >
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="200"
                  image={product.image_url}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {product.name}
                  </Typography>
                  <Typography
                    style={{
                      fontWeight: "500",
                      fontSize: "20px",
                      color: "var(--primary-color)",
                    }}
                  >
                    ${product.price}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {product.desc.slice(0, 120)}
                  </Typography>
                </CardContent>
                <CardActions
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Box>
                    <IconButton aria-label="add to favorites">
                      <FavoriteIcon />
                    </IconButton>
                  </Box>
                  <Link
                    to={`/purchase/${product._id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <Button style={{ color: "var(--secondary-color)" }}>
                      Purchase
                    </Button>
                  </Link>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Footer />
    </div>
  );
}
