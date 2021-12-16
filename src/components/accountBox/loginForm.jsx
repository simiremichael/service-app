import React,{useContext} from 'react';
import { AccountContext } from './accountContext';
import {BoldLink, BoxContainer, FormContainer, Input, MutedLink, SubmitButton} from './common';


function LoginForm(props) {
    const {switchToSignup} = useContext(AccountContext);
    return (
        <BoxContainer>
          <FormContainer>
              <Input type="email" placeholder="Email" />
              <Input type="password" placeholder="Password" />
              <MutedLink href="#">Forget your password?</MutedLink>
              <SubmitButton type="submit">Log In</SubmitButton>
          </FormContainer>  
 <MutedLink href='#'>Don't have an account? <BoldLink href='#' onClick={switchToSignup}>Sign Up</BoldLink></MutedLink>
        </BoxContainer>
    )
}

export default LoginForm
