import Link from 'next/link';
import { Footer, Head, Navbar, Spaceship } from '@/common/components';
import { InformationCircleIcon, SparklesIcon } from '@heroicons/react/outline';

export default function Home() {
  const title = `SOC Asklepios`;
  return (
    <>
      <Head title={title} />

      <Navbar />

      <div className="container mx-auto text-center pt-32 px-2">
        <h1 className="font-mono text-6xl font-bold tracking-wider underline text-primary-focus decoration-accent leading-relaxed mb-4">
          <SparklesIcon className="h-16 w-16 inline-block mr-2 text-secondary" />
          {title}
        </h1>

        <div className="mx-auto w-full rounded-box xl:w-4/5 2xl:w-2/3 py-2 mb-12">
          <Spaceship />
        </div>

        <div className="bg-neutral rounded-box mb-12 text-neutral-content pt-8 pb-5 px-8">
          <div className="container mx-auto pt-0.5">
            <p className="font-mono mb-3">
              <span className="font-bold">„Im Jahr 2094.</span> Du befindest
              dich auf einer interplanetaren Reise, und warst bis gerade eben im
              Hyperschlaf. Die AI (SOLID) des Schiffes 'SOC Asklepios' hat dich
              geweckt. Du musst ihr helfen, die Boardsoftware zu prüfen und zu
              refaktorisieren, um sicher auf dem Planet 'Yagni' landen zu
              können.
              <span className="font-bold">“</span>
            </p>
            <Link href={`/info`}>
              <a className="btn btn-link bg-base-100/60 hover:bg-base-100/80">
                <InformationCircleIcon className="h-6 w-6 mr-1 text-info" />
                Story, Mission, Refactorings
              </a>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
