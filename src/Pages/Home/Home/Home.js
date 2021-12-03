import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Navigation from "../../Shared/Navigation/Navigation";
import Banner from "../Banner/ Banner";
import Products from "../Products/Products";
import Review from "../Review/Review";
import Video from "../Video/Video";

export default function Home() {
  return (
    <div>
      <Navigation />
      <Banner />
      <Products />
      <Video />
      <Review />
      <Footer />
    </div>
  );
}
