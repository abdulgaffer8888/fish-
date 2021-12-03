import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { Container, Grid } from "@mui/material";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { useState, useEffect } from "react";
import review from "../../../images/review.gif";
import "./Review.css";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

function Review() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const [allreview, setAllreview] = useState([]);
  const maxSteps = allreview.length;
  useEffect(() => {
    fetch("https://thawing-earth-84952.herokuapp.com/clientsreview")
      .then(res => res.json())
      .then(data => setAllreview(data));
  }, []);

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleStepChange = step => {
    setActiveStep(step);
  };

  return (
    <Container>
      <Typography
        variant="h4"
        style={{ textAlign: "center", margin: "80px 0px 20px" }}
      >
        Our Clients Review
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
      <Grid container spacing={{ xs: 2, md: 3 }}>
        <Grid item xs={12} sm={6}>
          <img style={{ width: "100%" }} src={review} alt="" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box
            style={{
              margin: "auto",
              display: "block",
              textAlign: "center",
              boxShadow: "3px 4px 10px #10715d2e",
              borderRadius: "10px",
            }}
          >
            <AutoPlaySwipeableViews
              axis={theme.direction === "rtl" ? "x-reverse" : "x"}
              index={activeStep}
              onChangeIndex={handleStepChange}
              enableMouseEvents
            >
              {allreview.map((reviews, index) => (
                <div
                  key={reviews._id}
                  style={{
                    padding: "20px",
                  }}
                >
                  <Typography
                    style={{
                      textAlign: "center",
                      color: "var(--primary-color)",
                      marginTop: "30px",
                    }}
                    variant="h5"
                  >
                    {reviews.userName}
                  </Typography>
                  <Typography
                    style={{
                      textAlign: "center",
                      color: "var(--body-text-color)",
                      marginTop: "20px",
                    }}
                  >
                    {reviews.review}
                  </Typography>
                  <Typography
                    style={{
                      textAlign: "center",
                      color: "var(--secondary-color)",
                      marginTop: "20px",
                    }}
                  >
                    Rating : {reviews.rating}
                  </Typography>
                </div>
              ))}
            </AutoPlaySwipeableViews>
            <MobileStepper
              style={{ borderRadius: "10px", padding: "20px" }}
              steps={maxSteps}
              position="static"
              activeStep={activeStep}
              nextButton={
                <Button
                  size="small"
                  onClick={handleNext}
                  disabled={activeStep === maxSteps - 1}
                >
                  Next
                  {theme.direction === "rtl" ? (
                    <KeyboardArrowLeft />
                  ) : (
                    <KeyboardArrowRight />
                  )}
                </Button>
              }
              backButton={
                <Button
                  size="small"
                  onClick={handleBack}
                  disabled={activeStep === 0}
                >
                  {theme.direction === "rtl" ? (
                    <KeyboardArrowRight />
                  ) : (
                    <KeyboardArrowLeft />
                  )}
                  Back
                </Button>
              }
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Review;
