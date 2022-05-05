import { AppProps } from 'next/app';
import '@/styles/global.css';
import '@/common/utils/whyDidYouRender';
import ProgressProvider from '@/common/hooks/ProgressProvider';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ProgressProvider>
      <Component {...pageProps} />
    </ProgressProvider>
  );
}
