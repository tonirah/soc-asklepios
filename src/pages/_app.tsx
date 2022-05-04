import { AppProps } from 'next/app';
import '@/styles/global.css';
import '@/common/utils/whyDidYouRender';

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
