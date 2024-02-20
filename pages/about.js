import React from "react";
import { styled, css } from "styled-components";
import Image from "next/image";
import Navigation from "../components/Navigation/Navigation";
import media from "css-in-js-media";
import Footer from "../components/Footer/Footer";

export default function About() {
  return (
    <>
      <Container>
        <a href="/">
          <ImageIcon src="/arrow.svg" alt="arrow" height={30} width={30} />
        </a>
        <StyledProfile>
          <Image
            src="/profile.jpeg"
            alt="profile"
            fill={true}
            objectFit="cover"
            objectPosition="top"
          />
        </StyledProfile>

        <StyledSection>
          <Waves>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1000 100"
              preserveAspectRatio="none"
            >
              <path
                class="elementor-shape-fill"
                opacity="0.33"
                d="M473,67.3c-203.9,88.3-263.1-34-320.3,0C66,119.1,0,59.7,0,59.7V0h1000v59.7 c0,0-62.1,26.1-94.9,29.3c-32.8,3.3-62.8-12.3-75.8-22.1C806,49.6,745.3,8.7,694.9,4.7S492.4,59,473,67.3z"
              ></path>
              <path
                class="elementor-shape-fill"
                opacity="0.66"
                d="M734,67.3c-45.5,0-77.2-23.2-129.1-39.1c-28.6-8.7-150.3-10.1-254,39.1 s-91.7-34.4-149.2,0C115.7,118.3,0,39.8,0,39.8V0h1000v36.5c0,0-28.2-18.5-92.1-18.5C810.2,18.1,775.7,67.3,734,67.3z"
              ></path>
              <path
                class="elementor-shape-fill"
                d="M766.1,28.9c-200-57.5-266,65.5-395.1,19.5C242,1.8,242,5.4,184.8,20.6C128,35.8,132.3,44.9,89.9,52.5C28.6,63.7,0,0,0,0 h1000c0,0-9.9,40.9-83.6,48.1S829.6,47,766.1,28.9z"
              ></path>
            </svg>
          </Waves>
          <StyledAbout>
            <h1>Simona Jäkel</h1>
            <p>Dipl. Bowen-Practitioner</p>
            <p>Gesundheitspraktikerin (BfG)</p>
            <p>Mutter von 3 Kindern</p>
          </StyledAbout>
          <Quote>
            <p>
              " Through hands we SERVE, through serving we LOVE
              <br /> through loving we CREATE "
            </p>
            <Author>- J. Norton</Author>
          </Quote>
        </StyledSection>
      </Container>
    </>
  );
}

const ImageIcon = styled(Image)`
  position: absolute;
  top: 10px;
  left: 10px;
  align-items: center;
  padding: 2px 2px;
  background-color: white;
  border-radius: 100%;
  border: 2px solid #ccc1c1;
  cursor: pointer;

  font-size: 1.3em;
  font-weight: lighter;
  &:hover {
    background-color: white;
    color: #dac8a6;
  }
  ${media("<=phone")} {
    top: 10px;
  }
`;
const WavesBottom = styled.div`
  position: absolute;
  width: 100%;
  height: 50px;
  bottom: -10px;
  rotate: 180deg;
  svg {
    width: 100%;
    height: 100%;
    fill: #ffffff;
  }
  ${media("<=tablet")} {
    bottom: 4px;
  }
  ${media("<=desktop")} {
    bottom: 105px;
  }
`;

const Waves = styled.div`
  position: absolute;
  width: 100%;
  height: 50px;
  top: -1px;

  svg {
    width: 100%;
    height: 100%;
    fill: #ffffff;
  }
  ${media("<=phone")} {
    height: 35px;
    margin-top: -2px;
  }
`;
const Container = styled.div`
  background-color: white;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const StyledProfile = styled.div`
  width: 200px;
  height: 200px;
  position: relative;
  margin-top: 50px;

  img {
    border-radius: 50%;
  }
  ${media("<=phone")} {
    width: 150px;
    height: 150px;
  }
  ${media("<=tablet")} {
    width: 200px;
    height: 200px;
  }
`;
const StyledSection = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ede6d8;
  width: 100%;
  height: 75vh;
  padding-bottom: 10px;
  margin-top: 50px;
`;
const StyledAbout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  color: #333; // Dark text color for better readability
  text-align: center; // Center the text
  font-weight: lighter;

  h1 {
    font-size: 2em; // Make the name larger
    color: black; // Use a different color for the name
    font-weight: lighter;
    font-family: "Inter Tight", sans-serif;
  }

  p {
    color: beige;
    font-size: 1.2em;
    line-height: 1.4; /* Increase line height for better readability */
    max-width: 400px; /* Limit paragraph width for better text wrapping */
    margin: 0 auto; /* Center paragraphs horizontally */
    padding: 0 20px; /* Add some padding for visual appeal */
    /* Add a semi-transparent background */
    border-radius: 5px; /* Add rounded corners */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Add a subtle shadow */
    transition: transform 0.3s ease-in-out; /* Add smooth transition on hover */
    background-color: #d2c19d; /* Use a light background color */
    font-family: "inter Tight", sans-serif;
  }
`;
const Quote = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  margin-top: 20px;
  text-align: center;
  font-family: "Recoleta Alt Light";
  line-height: 1.5em;

  font-size: 1.5em;
  color: #9f887e;

  p {
    margin: 0;
  }

  ${media("<=phone")} {
    font-size: 1.2em;
  }
`;

const Author = styled.span`
  margin-top: 5px;
  font-size: 0.9em;

  width: 100%;
  color: black;
`;
