import React from "react";
import Heading from "../../components/layout/Heading";
import Cards from "./Cards";
import Slider from "./Intro";

function Home() {
  return (
    <>
      <Heading>Welcome</Heading>
      <h6 className="text-center p-3">
        Who likes reading a bunch of text right? See my journey in images below instead!.
      </h6>

      <Slider />
      <Cards />
    </>
  );
}

export default Home;
