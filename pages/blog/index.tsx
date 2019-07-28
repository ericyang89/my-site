import React from "react";
import styled from 'styled-components'
import Container from '@material-ui/core/Container'
import Banner from "./../../components/Banner";
import Header from "./../../components/Header";
import TwoColumnWrapper from './../../components/TwoColumnWrapper'
import Catagory from './../../components/Catagory'
import Item from './Item'

const BannerWrapper = styled.div`
  margin-top: -100px;
`;
const Content =styled.div`
  min-height:100px;
  background:red;
`;
const HeaderSpace=styled.div`
  height:120px;
`;
const Index = () => (
  <div>
    <Header isWhite={false}></Header>
    <BannerWrapper>
      <Banner title={'我的博客'} name="博客" url="/blog" />
    </BannerWrapper>
    <HeaderSpace></HeaderSpace>
    <TwoColumnWrapper rightComponentList={
      <Catagory/>
    }>
      <Item></Item>
    </TwoColumnWrapper>
  </div>
);

export default Index;
