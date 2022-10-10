import React, { useEffect } from "react";

import Carousel from "react-bootstrap/Carousel";
import image1 from "../../images/sliderimage1.jpg";
import image2 from "../../images/sliderimage2.jpg";
import image3 from "../../images/sliderimage3.jpg";

function Introduction() {
  return (
    <>
      <Carousel fade variant="dark">
        <Carousel.Item>
          <img className="d-block w-50 rounded" src={image1} alt="First slide" />
          <Carousel.Caption>
            <h2>2006-2012</h2>
            <p>Athlete</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-50" src={image2} alt="Second slide" />

          <Carousel.Caption>
            <h2>2012-2017</h2>
            <p>Team leader</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-50" src={image3} alt="Third slide" />

          <Carousel.Caption>
            <h2>2020-</h2>
            <p>Frontend development</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default Introduction;
