import { InformationCircleIcon, SparklesIcon } from '@heroicons/react/outline';
import { ThemeChanger } from '@/common/components/ThemeChanger';
import Link from 'next/link';
import { ViewListIcon, XIcon } from '@heroicons/react/solid';
import { useContext, useState } from 'react';
import { TaskProgressIcon } from '@/common/components/TaskProgressIcon';
import { allTasks } from '@/modules/tasks';
import { ProgressContext } from '@/common/hooks';

export function Navbar() {
  const [isListOpen, setIsListOpen] = useState(false);
  const toggleIsListVisible = () => setIsListOpen((isListOpen) => !isListOpen);

  const { getTaskProgress } = useContext(ProgressContext);

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
              onClick={toggleIsListVisible}
              className="btn btn-sm btn-link text-base-content px-1.5 h-full text-left normal-case"
            >
              {isListOpen ? (
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
            <button onClick={toggleIsListVisible} className="btn btn-square">
              {isListOpen ? (
                <XIcon className="w-8" />
              ) : (
                <ViewListIcon className="w-8" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* drawer: https://codesandbox.io/s/bjbfr */}
      <div
        className={
          `fixed overflow-hidden z-10 bg-base-300/40 inset-0 transform ease-in-out ` +
          (isListOpen
            ? `transition-opacity opacity-100 duration-200 translate-x-0`
            : `transition-all delay-200 opacity-0 translate-x-full`)
        }
      >
        <div
          className={
            ` w-screen max-w-lg right-0 absolute bg-base-100 border-l border-neutral-content/20 h-full duration-200 ease-in-out transition-all transform  ` +
            (isListOpen ? ` translate-x-0 ` : ` translate-x-full delay-100`)
          }
        >
          {/*<div className="relative w-screen max-w-lg pb-10 pt-16 px-4 flex flex-col space-y-6 overflow-y-scroll h-full">*/}
          <div className="relative w-screen max-w-lg pb-10 pt-20 px-4 overflow-y-scroll h-full">
            <div className="sm:hidden">
              <div className="flex justify-around">
                <ThemeChanger />
                <Link href={`/info`}>
                  <a className="btn btn-sm btn-link text-base-content px-1.5 h-full text-left normal-case">
                    <InformationCircleIcon className="w-8 mr-1 text-info" />
                    Story, Mission,
                    <br />
                    Refactorings
                  </a>
                </Link>
              </div>
              <div className="divider mb-0"></div>
            </div>

            <h2 className="font-mono text-2xl font-bold tracking-wider underline text-secondary decoration-accent mx-5 mb-5 mt-6">
              Kritische Codestellen
            </h2>
            <div className="mx-5 mb-10">
              {allTasks.map((task) => {
                return (
                  <div key={task.uuid} onClick={toggleIsListVisible}>
                    <Link href={`/tasks/${task.uuid}`}>
                      <a className="btn btn-link block w-fit">
                        <div
                          key={task.uuid}
                          className="flex flex-row items-center text-left"
                        >
                          <TaskProgressIcon
                            taskProgress={getTaskProgress(task.uuid)}
                            className="h-8 w-8 mr-1 shrink-0"
                          />
                          {task.name}
                        </div>
                      </a>
                    </Link>
                  </div>
                );
              })}
            </div>

            <div className="text-center">
              <div className="divider"></div>
              <button
                className="btn btn-sm btn-outline"
                onClick={toggleIsListVisible}
              >
                Liste schließen
              </button>
            </div>
          </div>
        </div>

        <div
          className="w-screen h-full cursor-pointer"
          onClick={toggleIsListVisible}
        ></div>
      </div>
    </>
  );
}
