import React from "react";
import Banner from "./../components/Banner";
import Header from "./../components/Header";
import styled from 'styled-components'

const BannerWrapper = styled.div`
  margin-top: -100px;

`;
const Index = () => (
  <div>
    <Header isWhite={false}></Header>
    <BannerWrapper>
      <Banner />
      this is blog
    </BannerWrapper>
  </div>
);

export default Index;
