import React from "react";
import Heading from "../../components/layout/Heading";
import Cards from "./Cards";
import Slider from "./Intro";

function Home() {
  return (
    <>
      <Heading>Welcome</Heading>
      <p className="text-center">Who likes reading a bunch of text right? See my journey in images below instead:).</p>

      <Slider />
      <Cards />
    </>
  );
}

export default Home;
