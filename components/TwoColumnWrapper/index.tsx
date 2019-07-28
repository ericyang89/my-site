import React from "react";
import styled from 'styled-components'
import Container from '@material-ui/core/Container'

const Wrapper=styled.div`
  /* for float clear */
  &:after{
    content:' ';
    clear: both;
    display:block;
    height:0;
  }
`;
const Main=styled.div`
  margin-right:380px;
  @media (max-width:900px) {
    margin-right:30px;
  }
`;
const RightSite=styled.div`
  width:350px;
  float:right;
  @media (max-width:900px) {
    display:none;
  }
`;


type Props={
  rightComponentList:Array<React.Component>;
  children:any;
}
const Index =({rightComponentList,children})=>{
  return <Container>
    <Wrapper>
      <RightSite>{
        rightComponentList
      }</RightSite>
      <Main>{children}</Main>
    </Wrapper>
  </Container>
};

export default Index;