import * as React from "react";
import Document, { Head, Main, NextScript } from "next/document";
import { extractCritical } from "emotion-server";

type Props = {
  styleTags: any;
  css: any;
};

export default class MyDocument extends Document<Props> {
  static getInitialProps({ renderPage }: { renderPage: any }) {
    const page = renderPage((App: any) => (props: any) => <App {...props} />);
    const styles = extractCritical(page.html);
    return { ...page, ...styles };
  }
  render() {
    return (
      <html>
        <Head>
          <meta
            name="description"
            content="An open community of decentralized finance platforms."
          />
          <meta name="viewport" content="width=device-width" />
          {this.props.styleTags}
          <style dangerouslySetInnerHTML={{ __html: this.props.css }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
