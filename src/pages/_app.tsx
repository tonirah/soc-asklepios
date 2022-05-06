import { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import '@/styles/global.css';
import '@/common/utils/whyDidYouRender';
import { parseRequiredBoolean } from '@/common/utils/parseRequired';

const SSR_ENABLED = parseRequiredBoolean(process.env.SSR_ENABLED);

const ProgressProvider = dynamic(
  () => import(`@/common/hooks/ProgressProvider`),
  { ssr: SSR_ENABLED },
);

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ProgressProvider>
      <Component {...pageProps} />
    </ProgressProvider>
  );
}
