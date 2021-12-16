import React from 'react';
import styled from 'styled-components';
import SpecialistImg from '../../src/specialist2.jpeg'


const SpecialistAdContainer = styled.div`
width: 100%;
height: 550px;
display: flex;
background-color: #ffff;
align-items: center;
justify-content: center;
margin-top: 20px;
`

const ContactContainer = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;

`
const SloganContainer = styled.div`

display: flex;
flex-direction: column;
text-align:start;
img{
    width: 100px;
    margin-bottom: 15px;
   
}
`
const Slogan = styled.div`
font-size: 25px;
color: #b38b00;
font-weight: 500;
font-family: courier;
margin-right: 4em;
`

const StandoutImage = styled.div`
width: 23em;
height: 19em;
img{
    width: 100%;
    height: 100%;
    border-radius: 10px;
}

`

const Button = styled.button`
border: 0;
width: 200px;
height: 40px;
align-content: center;
color: #b38b00;
padding: 5px 2em;
font-size: 15.5px;
font-weight: 700;
border-radius: 3px;
background: #fff1bf;
cursor: pointer;
box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
border: 3px solid #ffa500;

margin-top: 20px;
&:hover{
   background-color: #b38b00;
   box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px;
   border-color: white;
   color:#fff1bf;
}

&:focus {
    outline: none;
}

`

function SpecialistAd(props) {
    return (
        <SpecialistAdContainer>
            <ContactContainer>
            <SloganContainer>
            <img src="../images/logo2.svg" alt='' />
            <Slogan>You're a Specialist, and you</Slogan>
            <Slogan>have an oustanding</Slogan>
            <Slogan>service to offer?</Slogan>
            <Button>Join as specialist</Button>
            </SloganContainer>
            
            <StandoutImage>
                <img src={SpecialistImg} alt="" />
            </StandoutImage>
            </ContactContainer>
        </SpecialistAdContainer>
    )
}

export default SpecialistAd
