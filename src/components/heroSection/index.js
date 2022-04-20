import React, { useState } from "react";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";
import { ButtonR } from "../ButtonElements";
import Video from "../../videos/bgvideo.mp4";
import "../../App.css";

const HeroSection = ({ change }) => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <h1 className="h1-hero">Dr. Musa Adamu</h1>
        <h2 className="h2-hero">Progressive. Principled. Proven.</h2>
        <p className="hero-text">
          Welcome to the official website of Dr. Musa Adamu's campaign, your source of information on DMA Campaign including upcoming events, information on the constituent issues, history, background, and more. Go to the website.
        </p>
        <HeroBtnWrapper>
          <ButtonR to='/' onClick={() => change(false)} onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark="true">
            Continue {hover ? <ArrowForward /> : <ArrowRight />}
          </ButtonR>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
