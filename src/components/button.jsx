import React from 'react';
import styled from "styled-components";



const ButtonWrapper = styled.button`
border: 0;

color: #fff;
padding: 5px 2em;
font-size: 18px;
font-weight: 700;
border-radius: 3px;
background: rgb(255,140,0);
opacity:1;
cursor: pointer;
box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
border: 3px solid rgba(249, 249, 249, 0.1);
transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

&:hover{
    transform: scale(1.05);
   background-color: rgb(255,165,0);
   box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px;
   border-color: white;
}

&:focus {
    outline: none;
}

`
function Button(props) {
    return (
        <ButtonWrapper>
            Join us
        </ButtonWrapper>
    )
}

export default Button
