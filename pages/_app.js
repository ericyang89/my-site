import React from 'react';
import App, { Container } from 'next/app';

import 'highlight.js/styles/github.css';

import Header from './../components/Header'
import GlobalStyle from './../utils/GlobalStyle'

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <GlobalStyle></GlobalStyle>
        <Header></Header>
        <Component {...pageProps} />
      </Container>
    );
  }
}

export default MyApp;