import React from "react";
import styled from "styled-components";
import Container from "@material-ui/core/Container";
import Banner from "./../../components/Banner";
import Header from "./../../components/Header";
import TwoColumnWrapper from "./../../components/TwoColumnWrapper";
import Catagory from "./../../components/Catagory";

const Wrapper=styled.div`

`;
const HeadImage=styled.div`
  margin-bottom:-100px;
`;
const Content=styled.div`
  margin-top:100px;
  position:relative;
  padding-top:40px;
  box-shadow: 0px 10px 20px 0px rgba(221,221,221,0.3);
`;
const BlogDate=styled.div`
  position:absolute;
  top: -60px;
  left: 20px;
  display: block;
  color: #fff;
  background: #1345e6;
  padding: 8px 15px;
  border-radius: 5px;

`;

const Index = () => {
  return<Wrapper>
    <HeadImage>
      <img
        className="card-img rounded-0"
        src="/static/pic1.jpg"
        alt=""
      />
   
    </HeadImage>
    <Content>
      <BlogDate>
          <h3>15</h3>
          <p>2019-07</p>
        </BlogDate>
      <a className="d-inline-block" href="single-blog.html">
        <h2>Google inks pact for new 35-storey office</h2>
      </a>
      <p>
        That dominion stars lights dominion divide years for fourth have don't
        stars is that he earth it first without heaven in place seed it second
        morning saying.
      </p>

    </Content>
  </Wrapper>;
};

export default Index;
