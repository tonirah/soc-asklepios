import { Html, Head, Main, NextScript } from 'next/document';
import { SparklesIcon } from '@heroicons/react/outline';
import { renderToStaticMarkup } from 'react-dom/server';

export default function Document() {
  const faviconStringUrl = encodeURIComponent(
    renderToStaticMarkup(<SparklesIcon style={{ stroke: `#fc56c2` }} />),
  );
  return (
    <Html lang="de">
      <Head>
        <link rel="icon" href={`data:image/svg+xml,${faviconStringUrl}`} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
