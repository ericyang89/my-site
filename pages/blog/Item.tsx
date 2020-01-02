import React, { SFC } from "react";
import styled from "styled-components";
import Container from "@material-ui/core/Container";
import Banner from "./../../components/Banner";
import Header from "./../../components/Header";
import TwoColumnWrapper from "./../../components/TwoColumnWrapper";
import Catagory from "./../../components/Catagory";

const Wrapper = styled.div``;
const HeadImage = styled.div`
  margin-bottom: -100px;
  min-height: 60px;
`;
const Image = styled.img<{ src: string; alt: string }>`
  width: 100%;
`;
const Content = styled.div`
  margin-top: 100px;
  margin-bottom: 10px;
  position: relative;
  padding: 40px 10px 10px 10px;
  box-shadow: 0px 10px 20px 0px rgba(221, 221, 221, 0.9);
`;
const BlogDate = styled.div`
  position: absolute;
  top: -40px;
  left: 20px;
  display: block;
  color: #fff;
  background: #1345e6;
  padding: 8px 15px;
  border-radius: 5px;
`;
const Day = styled.div`
  font-size: 32px;
`;
type Content = {
  id: string;
  image?: string;
  date: string; //yyyy-mm-dd,
  title: string;
  abstract: string;
};
type Props = {
  data?: Content;
};

const defaultData: Content = {
  id: "this-is-test",
  image: "/static/pic1.jpg",
  date: "2019-12-31",
  title: "Google inks pact for new 35-storey office",
  abstract: `That dominion stars lights dominion divide years for fourth have don't
          stars is that he earth it first without heaven in place seed it second
          morning saying.`
};

const Index: SFC<Props> = ({ data = defaultData }) => {
  const day = data.date.substring(8);
  const yearMonth = data.date.substring(0, 7);
  return (
    <Wrapper>
      <HeadImage>
        {data.image && (
          <Image
            className={"card-img rounded-0"}
            src="/static/pic1.jpg"
            alt=""
          />
        )}
      </HeadImage>

      <Content>
        <BlogDate>
          <Day>{day}</Day>
          <div>{yearMonth}</div>
        </BlogDate>
        <a className="d-inline-block" href="single-blog.html">
          <h2>{data.title}</h2>
        </a>
        <p>{data.abstract}</p>
      </Content>
    </Wrapper>
  );
};

export default Index;
