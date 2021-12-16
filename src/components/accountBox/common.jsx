import styled from "styled-components";

export const BoxContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
`

export const FormContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
box-shadow: 0px 0px 2.5px rgba(15 15 15 0.19);
`

export const MutedLink = styled.a`
font-size: 12px;
color: rgba(200, 200, 200, 1);
font-weight: 500;
text-decoration: none;
margin-top: 10px;

`

export const BoldLink = styled.a`
font-size: 12px;
color: #b38b00;
font-weight: 500;
text-decoration: none;

`
export const Input = styled.input`
width: 70%;
height: 42px;
outline: none;
border: 1px solid #ffffff;
padding: 0px 10px;
font-size: 12px;
transition: all 200ms ease-in-out;
background-color:#fff1bf;
color:#b38b00;
margin:0px;

&:focus{
    outline: none;
    border-bottom: 1px solid rgb(251,176,21);
}

&::placeholder {
    color: rgba(200, 200, 200, 1);
}

&:not(:last-of-type) {
    borde-bottomr: 1px solid rgba(200, 200, 200, 0.4);
}
`

export const SubmitButton = styled.button`
width: 80%;
color: #fff;
font-size: 16px;
font-weight: 600;
margin-top: 22px;
padding: 10px 25%;
border: none;
border-radius: 100px 100px 100px 100px;
cursor: pointer;
transition: all, 240ms ease-in-out;
background: rgb(251,176,21);
background: linear-gradient(
    90deg, 
    rgba(251,176,21,1) 20%, 
    rgba(247,167,3,1) 100%);

    &:hover{
        filter: brightness(1.03);
    }
    `