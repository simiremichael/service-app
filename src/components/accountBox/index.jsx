import React,{useState} from 'react';
import styled from 'styled-components';
import LoginForm from './loginForm';
import SignupForm from './signupForm';
import { motion } from 'framer-motion';
import { AccountContext } from './accountContext';



const BoxContainer = styled.div`
width: 280px;
min-height: 550px;
desplay: flex;
flex-direction: column;
border-radius: 19px;
background-color: #fff1bf;
box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
overflow: hidden;
position: relative;
margin-top: 80px;


`
const TopContainer = styled.div`
width: 100%;
height: 220px;
display: flex;
flex-direction: column;
justify-content: flex-end;
padding: 0 1.8em;
padding-bottom: 3.5em;
`
const BackDrop = styled(motion.div)`
width:  160%;
height: 550px;
position: absolute;
display: flex;
flex-direction: column;
border-radius: 50%;
transform: rotate(60deg);
top: -290px;
left: -70px;
background: rgb(251,176,21);
background: linear-gradient(
    90deg, 
    rgba(251,176,21,1) 20%, 
    rgba(247,167,3,1) 100%);
`
const HeaderContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;

`

const HeaderText = styled.div`
font-size: 30px;
font-weight: 600;
line-height: 1.24;
color: #fff;
z-index: 10;
margin: 0;
text-align: start;
`
const SmallText = styled.div`
color: #fff;
font-weight: 500;
font-size: 11px;
z-index: 10;
margin: 0;
margin-top: 10px;
text-align: start;
`
const InnerContainer = styled.div`
weight: 100%;
display: flex;
flex-direction: column;
margin-top: 50px;
padding: 0 1em;
`
const backdropVariants = {
    expanded: {
        width: '233%',
        height: '1050px',
        borderRadius: '20%',
        transform: 'rotate(60deg)',
    },
    collapsed: {
        width: '160%',
        height: '550px',
        borderRadius: '50%',
        transform: 'rotate(60deg)',
    },
};

const expandingTransition = {
    type: 'spring',
    duration: 2.3,
    stiffness: 30,
};

function AccountBox(props) {

const {initialActive} = props;
const [isExpanded, setExpanded] = useState(false);
const [active, setActive] = useState(initialActive ? initialActive : "signin");


 const playExpandingAnimation = () => {
        setExpanded (true)
    setTimeout(() => {
        setExpanded(false)
    }, expandingTransition.duration = 2300 - 1500);
};



const switchActive = (active) => {
    setTimeout(() => setActive(active), 400);
};

const switchToSignup = () => {
    playExpandingAnimation ();
    setTimeout(() => {
        switchActive ("signup")
    })
}

const switchToSignin = () => {
    playExpandingAnimation ();
    setTimeout(() => {
        switchActive ("signin")
    })
}


const contextValue ={switchToSignup, switchToSignin, switchActive, playExpandingAnimation};

    return (
        <AccountContext.Provider value={contextValue}>
        <BoxContainer>
         <TopContainer>
             <BackDrop 
             initial={false} 
             animate={isExpanded ? "expanded" : "collapsed"}
             variants={backdropVariants}
             transition={expandingTransition}
             />
             {active === "signin" && <HeaderContainer>
                 <HeaderText>Welcome</HeaderText>
                 <HeaderText>Back</HeaderText>
                 <SmallText>Please sign in to continue!</SmallText>
             </HeaderContainer>}
             {active === "signup" && <HeaderContainer>
                 <HeaderText>Create</HeaderText>
                 <HeaderText>Account</HeaderText>
                 <SmallText>Please sign-up to continue!</SmallText>
             </HeaderContainer>}
         </TopContainer>   
         <InnerContainer>
             {active === "signin" && <LoginForm />}
             {active === "signup" && <SignupForm />}
         </InnerContainer>
        </BoxContainer>
        </AccountContext.Provider>
    )
}

export default AccountBox

