
import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';






function Navbar(props) {

    return (
        
        
<BrandLogoContainer>
<Link to='/'>
<LogoImage onClick={Link} src='/images/logo1.svg' alt="" />
</Link>
 <NavItems>
 
   <NavItems >Specialist porter</NavItems>
   <Link to='/customer/access/signup'>
  <ButtonRegister onClick={Link}>Register</ButtonRegister>
</Link>
  <Link to='/customer/access/signin'>
   <NavItems onClick={Link}>Log In</NavItems>
   </Link>
</NavItems>
</BrandLogoContainer>   
    )
}

export default Navbar;


const BrandLogoContainer = styled.nav`
width: 100%;
height: 5em;
display: flex;
align-items: start;
margin-top: 0;
justify-content: space-between;
position: absolute;
background-color: #f39c12; 
`
const LogoImage = styled.img`
width: 10em;
height: 4em;
margin-top: 0;
margin-left: 20px;
cursor: pointer;
}
`

const NavItems = styled.a`
   font-size: 17px;
   color: #fff;
   cursor: pointer;
   display: flex;
   text-decoration: none;
   outline: none;
   align-items: center;

   
   a{
    margin: 25px 20px;
    align-items: center;
    font-family: helvetical;
    font-size: 17px;
font-weight: 700;
       text-decoration: none
     }
`

const ButtonRegister = styled.button`

color: #fff;
font-size: 17px;
font-weight: 700;
border-radius: 3px;
background: rgb(255,140,0);
opacity:1;
cursor: pointer;
box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
border: 3px solid rgba(249, 249, 249, 0.1);
transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;


`