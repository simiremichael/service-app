import React from 'react';
import styled from 'styled-components';




const PageWrapper = styled.div`
width: 100%;
min-height: 100%;
padding: 0;
margin: 0;
display: flex;
flex-direction: column;
align-items: center;



`
function PageContainer (props) {



    return (
        <PageWrapper>{props.children}</PageWrapper>
            
        
    )
}

export default PageContainer;


