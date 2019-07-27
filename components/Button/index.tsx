import React, { Children } from 'react'
import styled from 'styled-components'

const Wrapper=styled.span`
    display: inline-block;
    background: linear-gradient(to right, #1345e6 0%, #ed239f 51%, #1345e6 100%);
    color: #fff;
    letter-spacing: 0px;
    font-family: "Roboto",sans-serif;
    font-weight: 500;
    font-size: 14px;
    line-height: 50px;
    padding: 0 38px;
    outline: none !important;
    text-align: center;
    cursor: pointer;
    text-transform: uppercase;
    border-radius: 5px;
    background-size: 200% auto;
`;
const Index=({children})=>{
  return <Wrapper >
    {children}
  </Wrapper>
}

export default Index;