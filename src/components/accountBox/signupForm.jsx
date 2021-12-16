import React,{useContext} from 'react';
import { AccountContext } from './accountContext';
import {BoldLink, BoxContainer, FormContainer, Input, MutedLink, SubmitButton} from './common';

function SignupForm(props) {
    const {switchToSignin} = useContext(AccountContext);
   
    return (
        <BoxContainer>
          <FormContainer>
           <Input type="text" placeholder="Full Name" />
              <Input type="email" placeholder="Email" />
              <Input type="password" placeholder="Password" />
              <Input type="password" placeholder=" Confirm Password" />
              <SubmitButton type="submit">Sign Up</SubmitButton>
          </FormContainer>  
 <MutedLink href='#'>Already have account? <BoldLink href='#' onClick={switchToSignin}>Log In</BoldLink></MutedLink>
        </BoxContainer>
    )
}

export default SignupForm