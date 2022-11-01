import Link from 'next/link';
import { Spaceship } from '@/common/components';
import { InformationCircleIcon, SparklesIcon } from '@heroicons/react/outline';
import { useContext } from 'react';
import { ProgressContext } from '@/common/hooks';
import Head from 'next/head';

function WinMessage() {
  return (
    <p className="font-mono font-bold leading-10 text-xl px-8 mb-4 motion-safe:animate-bounce-slow">
      <span className="before:block before:absolute before:-inset-1.5 before:-skew-y-2 before:-skew-x-3 before:bg-primary relative inline-block px-1">
        <span className="relative text-success-content">Geschafft!</span>
      </span>
      {` `}
      Dank deiner Hilfe konnte{` `}
      <span className="before:block before:absolute before:-inset-2 before:bg-accent relative inline-block px-1 mx-1">
        <span className="relative text-accent-content">SOC Asklepios</span>
      </span>
      {` `}
      sicher auf dem Planet{` `}
      <span className="before:block before:absolute before:-inset-1.5 before:skew-y-2 before:skew-x-3 before:bg-success relative inline-block px-1">
        <span className="relative text-success-content">YAGNI</span>
      </span>
      {` `}
      landen!
    </p>
  );
}

function InfoAlert() {
  return (
    <div className="bg-neutral rounded-box mb-12 text-neutral-content pt-8 pb-5 px-8">
      <div className="container mx-auto pt-0.5">
        <p className="font-mono mb-3">
          <span className="font-bold">„Im Jahr 2094.</span> Du befindest dich
          auf einer interplanetaren Reise und warst bis gerade eben im
          Hyperschlaf. Die AI (SOLID) des Schiffes 'SOC Asklepios' hat dich
          geweckt. Du musst ihr helfen, die Boardsoftware zu prüfen und zu
          refaktorisieren, um sicher auf dem Planeten 'YAGNI' landen zu können.
          <span className="font-bold">“</span>
        </p>
        <Link href="/info">
          <a className="btn btn-link bg-base-100/60 hover:bg-base-100/80">
            <InformationCircleIcon className="h-6 w-6 mr-1 text-info" />
            Story, Mission, Refactorings
          </a>
        </Link>
      </div>
    </div>
  );
}

export default function Home() {
  const title = `SOC Asklepios`;

  const { isWin } = useContext(ProgressContext);
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <div className="container mx-auto text-center pt-16 px-2">
        <h1 className="font-mono text-6xl font-bold tracking-wider underline text-primary-focus decoration-accent leading-relaxed mb-4">
          <SparklesIcon className="h-16 w-16 inline-block mr-2 text-secondary" />
          {title}
        </h1>

        {isWin ? <WinMessage /> : <InfoAlert />}

        <div
          id="soc-asklepios"
          className="scroll-mt-72 md:scroll-mt-40 mx-auto w-full rounded-box xl:w-4/5 2xl:w-2/3 mb-12"
        >
          <Spaceship />
        </div>
      </div>
    </>
  );
}
