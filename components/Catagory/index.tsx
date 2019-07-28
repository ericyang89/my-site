import React from "react";
import styled from "styled-components";
import { type } from "os";

type Items = {
  name: string;
  count: number;
  id: number;
};

type Props = {
  list?: Array<Items>;
};

const Wrapper = styled.div`
  width: 350px;
  background: #fbf9ff;
  padding: 30px;
  margin-bottom: 30px;
`;

const Title = styled.h3`
  font-size: 20px;
  margin-bottom: 40px;
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  color: #05364d;
  border-bottom: 1px solid #f0e9ff;
  transition: all 0.3s ease 0s;
  padding-bottom: 12px;
`;

const Item = styled.li`
  border-bottom: 1px solid #f0e9ff;
  transition: all 0.3s ease 0s;
  padding-bottom: 12px;
  list-style: none;
  font-size: 14px;
  line-height: 20px;
  color: #888888;
  padding:12px 0 15px 0;
`;
const Ul=styled.ul`
  list-style: none;
    margin: 0px;
    padding: 0px;
`;

const defaultData: Items[] = [
  {
    name: "test",
    count: 12,
    id: 999
  },
  {
    name: "aaabbb",
    count: 12,
    id: 3333
  },
  {
    name: "中文",
    count: 77,
    id: 99449
  }
];

const Index: React.SFC<Props> = ({ list = defaultData }) => {
  return (
    <Wrapper>
      <Title>分类</Title>
      <Ul>
        {list.map(item => (
          <Item key={item.id}>{`${item.name}(${item.count})`}</Item>
        ))}
      </Ul>
    </Wrapper>
  );
};

export default Index;