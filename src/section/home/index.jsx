import React from "react";
import {
  Container,
  HomeSection,
  Box,
  Title,
  Subtitle,
  ButtonContainer,
  VideoContainer,
  Round,
  Circle,
} from "./elements";
import Typewriter from "typewriter-effect";
import Button from "../../components/button/index";
import GIF from "../../assets/Home Video.mp4";
import RoundTextBlack from "../../assets/Rounded-Text-Black.png";

const Home = () => {
  return (
    <HomeSection>
      <Container>
        <Box>
          <Title>
            Discover a new era of cool
            <Typewriter
              options={{ autoStart: true, loop: true }}
              onInit={(typewriter) => {
                typewriter
                  .typeString(`<span class="text-1">Nfts.</span>`)
                  .pauseFor(2000)
                  .deleteAll()
                  .typeString(`<span class="text-2">Collectible Items.</span>`)
                  .pauseFor(2000)
                  .deleteAll()
                  .typeString(`<span class="text-3">Ape Killers!</span>`)
                  .pauseFor(2000)
                  .deleteAll()
                  .start();
              }}
            />
          </Title>

          <Subtitle>Bored of Apes? Try Something New.</Subtitle>
          <ButtonContainer>
            <Button text="Explore" link="#about" />
          </ButtonContainer>
        </Box>
        <Box>
          <VideoContainer>
            <video src={GIF} type="video/mp4" autoPlay muted loop />
          </VideoContainer>
        </Box>

        <Round>
          <Circle>&#x2193;</Circle>
          <img src={RoundTextBlack} alt="NFT" />
        </Round>
      </Container>
    </HomeSection>
  );
};

export default Home;
