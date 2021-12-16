import React from 'react';
import  PageContainer  from '../../pageContainer';
import Navbar from '../../brandlogo/Navbar';
import Footer from '../footer';
import styled from 'styled-components';
import AccountBox from '../../components/accountBox/index'
import { useParams } from 'react-router-dom';


const InnerPageContainer = styled.div`
flex: 1;
width: 100%;
max-width:auto;
min-height: 70vh;
padding: 1em;
display: flex;
margin-left: 50px;
flex-direction: column;
align-items: center;
margin-bottom: 15px;
`

function CustomerAccessPage(props) {
    const {action} = useParams();
    
    return (
        <PageContainer>
            <Navbar  />
            <InnerPageContainer>
            <AccountBox initialActive={action}/>
             </InnerPageContainer>
            <Footer />
        </PageContainer>
    );
}

export default CustomerAccessPage
