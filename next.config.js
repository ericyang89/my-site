const images = require('remark-images')
const emoji = require('remark-emoji')
const codeFormater=require('remark-code-frontmatter')
const codeHighLight=require('remark-highlight.js')

const withCSS = require('@zeit/next-css')
let config;



const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    mdPlugins: [images, emoji,codeFormater,codeHighLight]
  }
})

config = withMDX({
  pageExtensions: ['js', 'jsx', 'md', 'mdx','ts','tsx']
})

config=withCSS(config);

module.exports=config;
// module.exports = withMDX({
//   pageExtensions: ['js', 'jsx','ts','tsx', 'mdx','md']
// })