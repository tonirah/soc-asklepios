import { InformationCircleIcon, SparklesIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import { ViewListIcon, XIcon } from '@heroicons/react/solid';
import { useState } from 'react';
import { Drawer, ThemeChanger } from '@/common/components/';

export function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const toggleDrawer = () => setIsDrawerOpen((isListOpen) => !isListOpen);

  return (
    <>
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

          <div className="hidden sm:block flex-none flex items-center self-stretch">
            <ThemeChanger />
            <Link href={`/info`}>
              <a className="btn btn-sm btn-link text-base-content px-1.5 h-full text-left normal-case">
                <InformationCircleIcon className="w-8 mr-1 text-info" />
                Story, Mission,
                <br />
                Refactorings
              </a>
            </Link>
            <button
              onClick={toggleDrawer}
              className="btn btn-sm btn-link text-base-content px-1.5 h-full text-left normal-case"
            >
              {isDrawerOpen ? (
                <XIcon className="w-8 mr-1 text-primary" />
              ) : (
                <ViewListIcon className="w-8 mr-1 text-primary" />
              )}
              Liste kritischer
              <br />
              Codestellen
            </button>
          </div>

          <div className="sm:hidden flex-none mx-1">
            <button
              aria-label="Menü öffnen und schließen"
              onClick={toggleDrawer}
              className="btn btn-square"
            >
              {isDrawerOpen ? (
                <XIcon className="w-8" />
              ) : (
                <ViewListIcon className="w-8" />
              )}
            </button>
          </div>
        </div>
      </div>

      <Drawer isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
    </>
  );
}
