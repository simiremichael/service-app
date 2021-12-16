import React from 'react';
import styled from 'styled-components';
import SpecialistImg from '../../src/imagesss.jpg';
import Navbar from "../brandlogo/Navbar";
import LogoText from '../brandlogo/logoText';



function TopSection( props) {



    
    return (
       
        <TopSectionContainer>
         
         <Navbar />
          <BackgroundFilter> 
          
         
            <TopSectionInnerContainer>
            
          <StandoutImage >
          <LogoText />  
         
        <TopImg src={SpecialistImg}  alt=""/>
        
          </StandoutImage>
         
          </TopSectionInnerContainer>
          </BackgroundFilter>
        
        </TopSectionContainer>
       
    )
}

export default TopSection

const TopSectionContainer = styled.div`

width: 100%;
height: 750px;
background-position: 0px -50px;
background-size: cover;
margin-bottom: 15px;
display: flex;
flex-direction: column;
`

const BackgroundFilter = styled.div`
width: 100%;
height: 100%;
background-color: #fff1bf; 
display: flex;
flex-direction: column;
`

const TopSectionInnerContainer = styled.div`
width: 100%;
height: 100%;
display: flex;
align-items: center;

`

const StandoutImage = styled.div`
width: 100%;
margin-bottom: 5px;
display: flex;
text-align: start;
align-items: center;
justify-content: space-evenly;


`
const TopImg = styled.img`
width: 20em;
    height: 28em;
    border-radius: 15px;
`