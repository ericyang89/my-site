import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from 'next/router';

const Wrapper = styled.div`
  height: 100px;
  text-align: center;
  display:flex;
  justify-content:center;
  align-items:center;
`;

type ItemProps={
  isActive:boolean
}
const Item = styled.span<ItemProps>`
  display:flex;
  margin-right: 28px;
  color:${props=>props.isActive?'#efb6df':'#05364d'};
  &:hover{
    color:#efb6df;
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
  }
];

const Index = () => {
  const router = useRouter();
  // console.log('router',router);

  return (
    <Wrapper>
      {dataList.map(item => {
        return (
          <Item isActive={router.pathname === item.url} key={item.title}>
            <Link href={item.url}>
              <a>{item.title}</a>
            </Link>
          </Item>
        );
      })}
    </Wrapper>
  );
};

export default Index;
