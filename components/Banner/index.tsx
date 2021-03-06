import React from "react";
import styled from "styled-components";
import Link from "next/link";

const Split=styled.span`
  margin:0 14px;
`;
const Wrapper = styled.div`
    background: url('/static/banner.png') no-repeat right bottom;
    background-size: cover;
  height: 450px;
  @media (max-width: 768px) {
    height: 350px;
  }
`;

const Placer = styled.div`
  height: 100px;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  flex-direction:column;
  height: 350px;
  @media (max-width: 768px) {
    height: 250px;
  }
`;

type Props={
 title:string;
 name:string;
 url:string;
}

const Index:React.SFC<Props> = ({title,name,url}) => {

  return (
    <Wrapper>
      <Placer />
      <Content>
        <h1>{title}</h1>
        <div>
          <Link href="/">
          <a>首页</a>
          </Link>
          <Split>
          &gt;
          </Split>
          <Link href={url}>
          <a>{name}</a>
          </Link>
        </div>
      </Content>
    </Wrapper>
  );
};

export default Index;
