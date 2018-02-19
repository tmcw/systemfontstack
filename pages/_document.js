// ./pages/_document.js
import Document, { Head, Main, NextScript } from "next/document";
import flush from "styled-jsx/server";

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const { html, head, errorHtml, chunks } = renderPage();
    const styles = flush();
    return { html, head, errorHtml, chunks, styles };
  }

  render() {
    return (
      <html>
        <Head>
          <link rel="icon" type="image/png" href="/static/favicon.png" />
          <link href="/static/tachyons.min.css" rel="stylesheet" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=1"
          />
          <style>{`@media screen and (min-width: 30em) {
  .dg-ns { display: -ms-grid; display: grid; }
}`}</style>
        </Head>
        <body className="sans-serif bg-white black">
          {this.props.customValue}
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
