import React from 'react'
import { AboutusSection, Container, Box, CarouselContainer, Title,SubText,SubTextLight,ButtonContainer} from './elements'
import Button from '../../components/button/index'
import {dark} from '../../styles/themes'
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from '../../assets/Nfts/bighead.svg';
import img2 from '../../assets/Nfts/bighead-1.svg';
import img3 from '../../assets/Nfts/bighead-2.svg';
import img4 from '../../assets/Nfts/bighead-3.svg';
import img5 from '../../assets/Nfts/bighead-4.svg';
import img6 from '../../assets/Nfts/bighead-5.svg';
import img7 from '../../assets/Nfts/bighead-6.svg';
import img8 from '../../assets/Nfts/bighead-7.svg';
import img9 from '../../assets/Nfts/bighead-8.svg';
import img10 from '../../assets/Nfts/bighead-9.svg';


// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {Pagination, Navigation, Autoplay, EffectCards } from "swiper";
import { ThemeProvider } from 'styled-components';

const AboutUs = () => {
  return (
    <AboutusSection>
     <Container>
      <Box>

        <CarouselContainer>
        <Swiper
        autoplay={{delay:2000, disableOnInteraction:false}}
        pagination={{type:'fraction'}}
        scrollbar={{draggable:true}}
        navigation={true}
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards , Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide><img src={img1} alt="The Weirdos" /></SwiperSlide>
        <SwiperSlide><img src={img2} alt="The Weirdos" /></SwiperSlide>
        <SwiperSlide><img src={img3} alt="The Weirdos" /></SwiperSlide>
        <SwiperSlide><img src={img4} alt="The Weirdos" /></SwiperSlide>
        <SwiperSlide><img src={img5} alt="The Weirdos" /></SwiperSlide>
        <SwiperSlide><img src={img6} alt="The Weirdos" /></SwiperSlide>
        <SwiperSlide><img src={img7} alt="The Weirdos" /></SwiperSlide>
        <SwiperSlide><img src={img8} alt="The Weirdos" /></SwiperSlide>
        <SwiperSlide><img src={img9} alt="The Weirdos" /></SwiperSlide>
        <SwiperSlide><img src={img10} alt="The Weirdos" /></SwiperSlide>

      </Swiper>
        </CarouselContainer>
       
       
        </Box>
      <Box>
        <Title>Welcome To The Weirdos Club.</Title>
        <SubText>The WEIRDOS CLUB is a private collection of NFTs—unique digital collectibles. The Weirdos are stored as ERC-721 tokens on the Ethereum blockchain and hosted on IPFS.</SubText>
        <SubTextLight>With more than 200+ hand drawn traits, each NFT is unique and comes with a membership to an exclusive group of successful investors. Join an ambitious ever-growing community with multiple benefits and utilities.</SubTextLight>
        <ButtonContainer>
        <ThemeProvider theme={dark}>
        <Button text="JOIN OUR DISCORD" link="#" />
        </ThemeProvider>
        </ButtonContainer>
       
      </Box>

     </Container>
      </AboutusSection>
  )
}

export default AboutUs