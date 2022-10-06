import React from "react";
import Heading from "../../components/layout/Heading";
import Cards from "./Cards";
import Slider from "./Intro";

function Home() {
  return (
    <>
      <Heading>My journey so far</Heading>
      <Slider />
      <Cards />
    </>
  );
}

export default Home;
