import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'

const CardContainer = styled.div`
display: flex;
flex-direction: column;
over-flow: hidden;
width: 300px;
min-height: 250px;
background-color: #fff;
box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
margin:0.5em;
margin-bottom: 1.5em;

`
const TopContainer = styled.div`
width: 100%;

`
const ServiceThumbnail = styled.div`
width: 100%;
height:11em;
img{
    width: 100%;
    height: 100%;
}
`
const ContentContainer = styled.div`
width: 100%;
display: flex;
align-items: flex-start;
flex-direction: column;
flex: 1;
padding: 15px 14px;
justify-content: start;

`
const BottomContainer = styled.div`
width: 100%;
height: 32px;
display: flex;
align-items: center;
justify-content: space-between;
border-top: 1px solid rgba(15, 15, 15, 0.19);
padding: 0 10px;

`
const Title = styled.h2`
font-size: 17px;
margin: 0;
font-weight: 500;
color:#b38b00;
margin: 12px 12px 12px 0;
text-align: start;
`
const SpecialistName = styled.h4`
margin: 0;
color: #b38b00;
font-size: 12px;
font-weight: 400;
`
const RatingContainer = styled.div`
display: flex;
color:#ffa500;
align-items: center;

`
const PriceContainer = styled.div`
display: flex;

`

const PriceText = styled.div`
margin-left: 4px;
color:#b38b00;
font-weight: 700;
font-size: 15px;
align-items: center;
`

const StartingAtText = styled.h4`
margin: 0;
color:  #ffe380;
font-weight: 500;
font-size: 13px;
align-items: center;
`

function ServiceCard(props) {

    const {thumbnailUrl, specialist, title, rate, rating} = props;
    
    return (
        <CardContainer>
        <TopContainer>
       <ServiceThumbnail>
       <img src={thumbnailUrl} alt="title" />
       </ServiceThumbnail>
       </TopContainer>  
     <ContentContainer>
    <Title>{title}</Title>
    <SpecialistName>{specialist}</SpecialistName>
    </ContentContainer>
    <BottomContainer>
<RatingContainer>
<FontAwesomeIcon icon={faStar} size="sm"  />
{rating}
</RatingContainer>
<PriceContainer>
    <StartingAtText>STARTING AT</StartingAtText>
    <PriceText>N{rate}/hr</PriceText>
</PriceContainer>
    </BottomContainer>
        </CardContainer>
    )
}

export default ServiceCard;
