import { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import '@/styles/global.css';
import '@/common/utils/whyDidYouRender';
import { parseRequiredBoolean } from '@/common/utils/parseRequired';

const SSR_ENABLED = parseRequiredBoolean(process.env.SSR_ENABLED);

const ProgressContextProvider = dynamic(
  () => import(`@/common/hooks/ProgressContextProvider`),
  { ssr: SSR_ENABLED },
);

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ProgressContextProvider>
      <Component {...pageProps} />
    </ProgressContextProvider>
  );
}
