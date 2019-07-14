import React from 'react'
import Content from './../../md/my-first-post.md'


// const H1 = props => <h1 style={{ color: 'tomato' }} {...props} />
// const InlineCode = props => (
//   <code id='codes' style={{ color: 'purple' }} {...props} />
// )
const Code = props =>{
  //消除警告
  const {metaString,...resProps}=props

  return <code style={{ fontWeight: '600' }} {...resProps} />
} 
// const Pre = props => <pre style={{ color: 'red' }} {...props} />



// components={{ h1: H1, pre: Pre, code: Code, inlineCode: InlineCode }}
export default (props)=>{
  console.log(props);
  return <div>this is post 1
    <Content
    components={{code:Code}}
    ></Content>
  </div>
}