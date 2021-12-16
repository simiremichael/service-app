import React from 'react';
import styled from 'styled-components';
import Button from '../components/button';

function logoText() {
    return (
        <Container>
             
            <img src='./images/logo2.svg' alt="logo"/>
            <h2>Find the right specialist</h2>
           <h3>For the job</h3>
           <Button/>
        </Container>
    )
}

export default logoText

const Container = styled.div`
display: flex;
align-items: start;
flex-direction: column;
padding: 15px;
border-radius: 5px;

h2{
    color: #f39c12;
    margin-top: 0;
    line-height: 1.4;
    font-size: 30px;
    font-weight: 500;
    font-family: helvetical;
    margin-bottom:0;
}
h3{
    color: #f39c12;
    margin-top: 0;
    line-height: 1.4;
    font-size: 30px;
    font-weight: 500;
    font-family: helvetical; 
    margin-bottom:0;
}

img{
    width: 8em;
height: 5em;

}

Button{
    margin-top: 8px;
}

`