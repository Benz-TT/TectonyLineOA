import React from "react";
import App from "next/app";
import Head from "next/head";

export default class Home extends App {
  render() {
    const { Component } = this.props;
    return (
      <div style={{ minHeight: "100vh" }}>
        <Head>
          <script
            charSet="utf-8"
            src="https://static.line-scdn.net/liff/edge/2/sdk.js"
          ></script>
        </Head>
        <div style={{ minHeight: "100vh" }}>
          <Component />
        </div>
      </div>
    );
  }
}
