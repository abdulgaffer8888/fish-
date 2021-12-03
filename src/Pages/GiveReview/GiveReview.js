import React, { useState } from "react";
import { Button, Container, Rating, Typography } from "@mui/material";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Navigation from "../Shared/Navigation/Navigation";
import Footer from "../Shared/Footer/Footer";
import { Box } from "@mui/system";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";

export default function GiveReview() {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState([]);
  const { user } = useAuth();

  const reviewhandalar = e => {
    e.preventDefault();
    const feedback = document.getElementById("reviewfield").value;
    const userName = user.displayName;

    setReview({ review: feedback, rating: rating, userName: userName });

    fetch("https://thawing-earth-84952.herokuapp.com/clientreview", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Thanks for your feedback",
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "feedback not sent",
          });
        }
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
          Give your valuable Feedback
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
        <div>
          <Box
            style={{ textAlign: "center" }}
            sx={{
              alignItems: "center",
              "& > :not(style)": { m: 1 },
            }}
          >
            <TextareaAutosize
              id="reviewfield"
              minRows={6}
              style={{
                width: "80%",
                color: "gray",
                padding: "20px",
                margin: "auto",
                border: "1px solid lightgray",
                borderRadius: "5px",
              }}
              placeholder="Give feedback"
            />
          </Box>
          <Box
            style={{ textAlign: "center" }}
            sx={{
              "& > legend": { mt: 2 },
            }}
          >
            <Typography component="legend">
              Give you valuable rating please
            </Typography>
            <Box
              align="left"
              component="fieldset"
              mb={3}
              borderColor="transparent"
            >
              <Rating
                rating={rating}
                name="rating"
                onChange={(event, newValue) => {
                  setRating(newValue);
                }}
              />
            </Box>
          </Box>
          <Button
            variant="contained"
            onClick={reviewhandalar}
            style={{
              backgroundColor: "var(--secondary-color)",
              fontWeight: "bold",
              margin: " 20px auto",
              display: "block",
            }}
          >
            Send Feedback{" "}
          </Button>
        </div>
      </Container>
      <Footer />
    </div>
  );
}
