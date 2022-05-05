import { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import '@/styles/global.css';
import '@/common/utils/whyDidYouRender';

const ProgressProvider = dynamic(
  () => import(`@/common/hooks/ProgressProvider`),
  { ssr: false },
);

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ProgressProvider>
      <Component {...pageProps} />
    </ProgressProvider>
  );
}
