import Head from 'next/head';
import Link from 'next/link';
import { ArrowCircleLeftIcon } from '@heroicons/react/outline';

export default function About() {
  const title = `Über „SOC Asklepios“`;

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <div className="container mx-auto text-center pt-12 pb-32 px-2">
        <h1 className="font-mono text-3xl font-bold tracking-wider underline text-primary-focus decoration-accent text-center mb-4">
          {title}
        </h1>
        <div className="bg-neutral border border-neutral mx-auto py-12 max-w-3xl rounded-box">
          <div className="prose lg:prose-lg mx-auto px-5">
            <strong>{`<TODO />`}</strong>
          </div>
        </div>
        <div className="mt-4 text-center">
          <Link href="/#soc-asklepios" scroll={false}>
            <a className="btn">
              <ArrowCircleLeftIcon className="h-5 w-5 mr-1" />
              SOC Asklepios
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}
