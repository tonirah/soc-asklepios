import { InformationCircleIcon, SparklesIcon } from '@heroicons/react/outline';
import { ThemeChanger } from '@/common/components/ThemeChanger';
import Link from 'next/link';
import { ViewListIcon } from '@heroicons/react/solid';

export function Navbar() {
  return (
    <div className="fixed w-full bg-base-300 border-b border-neutral-content/20 z-50">
      <div className="flex container mx-auto items-stretch p-2">
        <div className="flex-grow flex-shrink-0">
          <Link href="/">
            <a className="btn btn-link normal-case text-xl font-mono font-bold tracking-wider underline text-primary-focus decoration-accent leading-relaxed">
              <SparklesIcon className="h-8 w-8 inline-block mr-2 text-secondary" />
              SOC Asklepios
            </a>
          </Link>
        </div>

        <div className="hidden md:block flex-none flex items-center self-stretch">
          <ThemeChanger />
          <Link href={`/info`}>
            <a className="btn btn-sm btn-link px-1.5 h-full text-left normal-case">
              <InformationCircleIcon className="w-8 mr-1 text-info" />
              Story, Mission,
              <br />
              Refactorings
            </a>
          </Link>
          <button className="btn btn-sm btn-link px-1.5 h-full text-left normal-case">
            <ViewListIcon className="w-8 mr-1 text-accent" />
            Liste kritischer
            <br />
            Codestellen
          </button>
        </div>

        <div className="md:hidden flex-none mx-1">
          <button className="btn btn-outline btn-square btn-primary border-2">
            <ViewListIcon className="w-8" />
          </button>
        </div>
      </div>
    </div>
  );
}
