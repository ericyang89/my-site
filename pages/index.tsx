import React from "react";
import Link from "next/link";
import Button from "./../components/Button";
import styled from "styled-components";
import Container from "@material-ui/core/Container";
import GithubIcon from "./../components/icons/Github";
import LindedinIcon from "./../components/icons/Linkedin";
import Header from './../components/Header'
// import { SvgIconProps } from "@material-ui/core/SvgIcon";

const IconList = styled.div`
  margin: 20px 0;
`;

const IconWrapper = styled.a`
  margin-right: 6px;
`;

export default () => {
  return (
    <div>
      <Header isWhite={true}></Header>
      <Container>
        <div>
          <h3>你好!</h3>
          <h1>我是 杨川</h1>
          <h5>一名前端工程师，刚入行教育工作者！</h5>
          <IconList>
            <IconWrapper key="github" href="https://github.com/ericyang89">
              <GithubIcon
              />
            </IconWrapper>
            <IconWrapper
              key="linkedin"
              href="https://www.linkedin.com/in/ericyang89/"
            >
              <LindedinIcon />
            </IconWrapper>
          </IconList>
          <Link href="/blog">
            <a>
              <Button>去我的博客看看？</Button>
            </a>
          </Link>
        </div>
      </Container>
    </div>
  );
};
