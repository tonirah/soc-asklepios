import { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import '@/styles/global.css';
import { parseRequiredBoolean } from '@/common/utils/';
import { Layout } from '@/common/components';
import { ThemeProvider } from 'next-themes';
import { useRouter } from 'next/router';

const SSR_ENABLED = parseRequiredBoolean(process.env.SSR_ENABLED);

const ProgressContextProvider = dynamic(
  () => import(`@/common/hooks/ProgressContextProvider`),
  { ssr: SSR_ENABLED },
);

export default function MyApp({ Component, pageProps }: AppProps) {
  // Reset state after navigation
  // https://nextjs.org/docs/api-reference/next/router#resetting-state-after-navigation
  const router = useRouter();

  return (
    <ProgressContextProvider>
      <ThemeProvider defaultTheme="dark" enableSystem={false}>
        <Layout>
          <Component key={router.asPath} {...pageProps} />
        </Layout>
      </ThemeProvider>
    </ProgressContextProvider>
  );
}
