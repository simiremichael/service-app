import React,{useState, useEffect} from 'react';
import styled from 'styled-components';
import ServiceCard from '../components/serviceCard';
import Axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faSpinner } from '@fortawesome/free-solid-svg-icons'



const ServicesContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: flex-start;

`
const Title = styled.h1`
font-weight: 900;
color: #ffa500;


`

const ServicesWrapper = styled.div`
display: flex;
flex-wrap: wrap;
`
const ButtonContainer = styled.div`
width: 100%;
display: flex;
justify-content: center;
`

const WarningText = styled.h3`
color: egba(100, 100, 100);
font-weight: 500;
`
const ViewMoreButton = styled.button`
background-color:#ffe380;
border: 0;

color: #fff;
padding: 5px 2em;
font-size: 15px;
font-weight: 600;
border-radius: 3px;
opacity:1;
cursor: pointer;
box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
border: 3px solid #fff1bf;

&:hover{
   background-color: #b38b00;
   box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px;
   border-color: #ffe380 ;
   contrast: (0.3);
}

&:focus {
    outline: none;
}
`



const wait =(num) => new Promise((rs) => setTimeout(rs, num));
function Services(props) {

    const [offeredServices, setServices] = useState ([]);
const [isLoading, setLoading] = useState(false);

    const isServicesEmpty = 
    !offeredServices || (offeredServices && offeredServices.lenght === 0);
    

const fetchServices = async () => {
    setLoading(true);
const response = await Axios.get("http://localhost:9000/services").catch
((err) => {
console.log("Error:", err);
    });

    if (response){
        setServices(response.data);
    }
    setLoading(false);
};

useEffect(() => {
   fetchServices ();
}, []);

    return (
        <ServicesContainer>
       <Title>Most used services & more</Title>
      
       <ServicesWrapper>
      
                {isServicesEmpty && !isLoading && (
                    <WarningText> No service are published yet!</WarningText>)}
            
                {isLoading && <WarningText>   <FontAwesomeIcon icon={faSpinner} size="fa-lg" />
        </WarningText>}
           
                {!isServicesEmpty && 
            !isLoading && 
            offeredServices.map((service, idx) => (
                <ServiceCard key={idx} {...service} />
            ))}

            </ServicesWrapper>
            <ButtonContainer>
            {!isServicesEmpty && !isLoading && (
                <ViewMoreButton>View more</ViewMoreButton>
            )}
            </ButtonContainer>
          
        </ServicesContainer>
    )
}

export default Services