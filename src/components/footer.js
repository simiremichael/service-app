import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons'



const FooterContainer = styled.div`
width: 100%;
min-height: 300px;
display: flex;
flex-direction: column;
padding: 3em 3em;
background: #ffe380 ;

`
const TopContainer = styled.div`
width: 100%;
display: flex;
border-top: 1px solid #fff1bf;
padding: 1em ;
background-color: #f39c12;
`
const ContentContainer = styled.div`
display: flex;
flex-direction: column;
&: not(:last-of-type) {
    margin-right: 2%;
}
`
const BottomContainer = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
height: 30px;
border-top: 1px solid #fff1bf;
align-items: center;
background-color: #f7a103;
`
const RightBottomContainer = styled.div`
display: flex;
margin-top: 75px;

`
const LeftBottomContainer = styled.div`
display: flex;
margin-left:0px;
img{
    width: 70px;
   margin-top: 75px;
   cursor: pointer;
}
`
const Title = styled.h2`
margin: 0;
margin-bottom: 8px;
color: #fff;
font-weight: 600;
font-size: 24px;
margin-bottom: 20px;
text-align: start;
margin-right: 100px;
` 
const PLink = styled.a`
text-decoration: none;
color:#fff;
font-weight: 500;
text-align: start;
margin-bottom: 20px;
&: not(:last-of-type) {
    margin-bottom: 10px;

}
`
const PrivacyText = styled.h6`
color: #f39c12;
font-size: 11px;
margin-left: 100px;
margin-top: 102px;
`

const Socios = styled.div`
color: 	#0000FF;
margin-right: 10px;
cursor: pointer;
&:hover{
    transform: scale(1.5);
   box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px;
   border-color: white;
}
`

const Socioss = styled.div`
color: 	#1E90FF;
cursor: pointer;
transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

&:hover{
    transform: scale(1.5);
   box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px;
   border-color: white;
}
`

function Footer() {
    return (
        <FooterContainer>
        <TopContainer>
        <ContentContainer>
            <Title>Categories</Title>
            <PLink>Car Repair</PLink>
            <PLink>Carpentry</PLink>
            <PLink>Cleaning</PLink>
            <PLink>Home Improvement</PLink>
            <PLink>Landscaping</PLink>
            <PLink>Demolition</PLink>
            <PLink>Moving</PLink>
            <PLink>Electrical</PLink>
            <PLink>Plumbing</PLink>
            <PLink>Others</PLink>
        </ContentContainer>
        <ContentContainer>
            <Title>Access</Title>
            <PLink>Login</PLink>
            <PLink>Join Us</PLink>
            <PLink>Login as Specialist</PLink>
            <PLink>Become a Specialist</PLink>
        </ContentContainer>
        </TopContainer>  
        <BottomContainer>
        <LeftBottomContainer>
        <img src="../images/logo2.svg" alt='' />
        <PrivacyText>All Right Reserved, 2021</PrivacyText>
        </LeftBottomContainer>
         <RightBottomContainer>
         <Socios>
         <FontAwesomeIcon icon={faFacebook} size="fa-lg" />
         </Socios>
         <Socioss>
          <FontAwesomeIcon icon={faTwitter} size="fa-lg"/>
          </Socioss>
         </RightBottomContainer>
        </BottomContainer>
        </FooterContainer>
    )
}

export default Footer
