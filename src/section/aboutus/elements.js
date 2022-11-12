import styled from "styled-components";
import { Swiper } from 'swiper/react';
import Arrow from '../../assets/Arrow.svg'

export const AboutusSection = styled.section`

min-height: 100vh ;
width:100% ;
display:flex ;
justify-content:center ;
align-items: center ;
position: relative;
background-color:${props => props.theme.text} ;
/* color: ${props => props.theme.body} ;; */

`

export const Container = styled.div`
  width: 75%;
  margin: 0 auto;
  /* background-color: lightblue; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Box = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CarouselContainer = styled.div` 

width:25vw;
height:70vh;

.swiper
{
    width:100% ;
    height:100% ;
}

.swiper-slide 
{
    background-color:${props => props.theme.carouselColor} ;
    border-radius: 20px ;
    display: flex ;
    justify-content:center ;
    align-items:center ;
}

.swiper-button-next
{
    color:${props => props.theme.text} ;
    right:0 ;
    width:4rem ;
    top:60% ;
    background-image:url(${Arrow}) ;
    background-position: center ;
    background-size: cover;

    &::after
    {
        display:none ;
    }
}

.swiper-button-prev
{
    color:${props => props.theme.text} ;
    left:0 ;
    width:4rem ;
    top:60% ;
    transform:rotate(180deg) ;
    background-image:url(${Arrow}) ;
    background-position: center ;
    background-size: cover;

    &::after
    {
        display:none ;
    }
}

`

export const Title = styled.h2` 

font-size: ${(props) => props.theme.fontxxl} ;
text-transform:capitalize ;
width:80% ;
color:${(props) => props.theme.body} ;
align-items: flex-start ;
width:80% ;
margin: 0 auto ;

`

export const SubText = styled.p` 

font-size: ${(props) => props.theme.fontlg} ;
width:80% ;
color:${(props) => props.theme.body} ;
align-items: flex-start ;
width:80% ;
margin: 1rem auto ;
font-weight: 400 ;

`

export const SubTextLight = styled.p` 

font-size: ${(props) => props.theme.fontmd} ;
width:80% ;
color:${(props) => `rgba(${props.theme.bodyRgba},0.6)`} ;
align-items: flex-start ;
width:80% ;
margin: 1rem auto ;
font-weight: 400 ;

`

export const ButtonContainer = styled.div`
  width: 80%;
  align-self: flex-start;
  margin:1rem auto ;
`;