import { Container, Typography } from "@mui/material";
import React from "react";

export default function Video() {
  return (
    <div>
      <Container>
        <Typography
          variant="h4"
          style={{ textAlign: "center", margin: "80px 0px 20px" }}
        >
          How high Betta fish can jump
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
        <iframe
          width="100%"
          height="500"
          style={{ borderRadius: "10px", boxShadow: "3px 4px 10px #10715d2e" }}
          src="https://www.youtube.com/embed/PtdiSqAbfpQ"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </Container>
    </div>
  );
}
