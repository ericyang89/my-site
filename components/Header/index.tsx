import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";
import { type } from "os";

type Props={
  isWhite?:boolean;
}
const Wrapper = styled.div<Props>`
  color:${props=>props.isWhite?'#8034c3':'#05364d'};
  height: 100px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
`;

type FloatWrapperProps = {
  visible: boolean;
  isWhite:boolean;
};

const FloatWrapper = styled.div<FloatWrapperProps>`
  position: fixed;
  width: 100%;
  background: ${props=>props.isWhite?'#fff':'#8034c3'};
  color:${props=>props.isWhite?'#8034c3':'#05364d'};
  height: 70px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  top: -70px;
  transform: ${props => (props.visible ? "translateY(70px)" : "translateY(0)")};
  transition: transform 500ms ease, background 500ms ease;
  -webkit-transition: transform 500ms ease, background 500ms ease;
  box-shadow: 0px 3px 16px 0px rgba(0, 0, 0, 0.1);
`;

type ItemProps = {
  isActive: boolean;

  isWhite:boolean;
};

const Item = styled.span<ItemProps>`
  display: flex;
  margin-right: 28px;
  color: ${props => (props.isActive ? "#efb6df" : props.isWhite?"#05364d":'#fff')};
  &:hover {
    color: #efb6df;
  }
`;

const dataList = [
  {
    title: "首页",
    url: "/"
  },
  {
    title: "博客",
    url: "/blog"
  },
  {
    title: "关于我",
    url: "/profile"
  }
];

const getItems = (data, isWhite,router) =>
  dataList.map(item => {
    return (
      <Item isActive={router.pathname === item.url} isWhite={isWhite} key={item.title}>
        <Link href={item.url}>
          <a>{item.title}</a>
        </Link>
      </Item>
    );
  });

const Index:React.SFC<Props> = ({ isWhite = false }) => {
  const [showFloatWrapper, setFloat] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const scrollHandle = () => {
      if (document.documentElement.scrollTop > 100) {
        !showFloatWrapper && setFloat(true);
      } else {
        showFloatWrapper && setFloat(false);
      }
    };
    window.addEventListener("scroll", scrollHandle, { capture: false });
    return () => {
      window.removeEventListener("scroll", scrollHandle);
    };
  });

  

  return (
    <div>
      <Wrapper>{getItems(dataList,isWhite, router)}</Wrapper>

      {
        <FloatWrapper visible={showFloatWrapper} isWhite={isWhite}>
          {getItems(dataList, isWhite,router)}
        </FloatWrapper>
      }
    </div>
  );
};

export default Index;
