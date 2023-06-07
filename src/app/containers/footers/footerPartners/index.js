import React from 'react';
import ImageSlider, { Slide } from "react-auto-image-slider";

function Slider() {
  return (
    <ImageSlider effectDelay={500} autoPlayDelay={2000}>
      <Slide>
        <img alt="img2" src={'/assets/images/phonepartners/cisco.png'} />
      </Slide>
      <Slide>
        <img alt="img2" src={'/assets/images/phonepartners/grandstream.png'} />
      </Slide>
      <Slide>
        <img alt="img1" src={'/assets/images/phonepartners/Polycom.png'} />
      </Slide>
      <Slide>
        <img alt="img1" src={'/assets/images/phonepartners/Snom.png'} />
      </Slide>
      <Slide>
        <img alt="img1" src={'/assets/images/phonepartners/Yealink.png'} />
      </Slide>
    </ImageSlider>
  );
}

export default Slider;