import React from 'react'
import TopSectionContainer from '../containers/topSection';
import styled from 'styled-components';
import PageContainer from '../pageContainer';
import {deviceSize} from '../components/responsive/index';
import Services from '../components/services';
import SpecialistAd from '../components/specialist';
import Footer from '../components/footer';

const InnerPageContainer = styled.div`
flex: 1;
width: 100%;
max-width:auto;
min-height: 70vh;
padding: 1em;
display: flex;
margin-left: 50px;
flex-direction: column;
align-items: flex-start;
margin-bottom: 15px;

`

const ContentContainer = styled.div`
width: 100%;
max-width: ${deviceSize.laptop}px;
display: flex;
flex-direction: column;
align-items: start;
`



 function HomePage(props) {
    

    return (
        <PageContainer>
        <TopSectionContainer />
        <InnerPageContainer>
        <ContentContainer>
        <Services />
      </ContentContainer>
      
        </InnerPageContainer>
        <SpecialistAd />
        <Footer />
        </PageContainer>
    )
}


export default HomePage;