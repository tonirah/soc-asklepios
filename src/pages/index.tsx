import Head from 'next/head';
import { GetStaticProps } from 'next';
import { allTasks, Category, ITask } from '@/modules/tasks';
import Link from 'next/link';
import { useContext } from 'react';
import { ProgressContext } from '@/common/hooks/';
import { TaskProgressIcon } from '@/common/components';
import { InformationCircleIcon, SparklesIcon } from '@heroicons/react/outline';
import { ExclamationIcon } from '@heroicons/react/solid';

export default function Home({ allTasks }: { allTasks: ITask[] }) {
  const {
    getTaskProgress,
    resetProgress,
    getCategoryProgressPercentage,
    getTotalScore,
    getRandomTaskId,
  } = useContext(ProgressContext);

  const title = `SOC Asklepios`;
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <div className="bg-space">
        <div className="container mx-auto text-center py-10 px-2">
          <h1 className="font-mono text-6xl font-bold tracking-wider underline text-primary-focus decoration-accent leading-relaxed">
            <SparklesIcon className="h-16 w-16 inline-block mr-2 text-secondary" />
            {title}
          </h1>

          <div className="bg-neutral rounded-box shadow-xl mb-12 text-neutral-content pt-8 pb-3 px-8">
            <p className="font-mono">
              <span className="font-bold">„Im Jahr 2094.</span> Du befindest
              dich auf einer interplanetaren Reise, und warst bis gerade eben im
              Hyperschlaf. Die AI (SOLID) des Schiffes 'SOC Asklepios' hat dich
              geweckt. Du musst ihr helfen, die Boardsoftware zu prüfen und zu
              refaktorisieren, um sicher auf dem Planet 'Yagni' landen zu
              können.
              <span className="font-bold">“</span>
            </p>
            <Link href={`/info`}>
              <a className="btn btn-link">
                <InformationCircleIcon className="h-6 w-6 mr-1 text-info" />
                Story, Mission, Refactorings
              </a>
            </Link>
          </div>

          <div className="mx-auto w-full xl:w-4/5 2xl:w-2/3 mb-12">
            <div className="flex w-full gap-2 justify-center items-end">
              <div className="text-left w-1/2">
                <Link
                  href={`/tasks/${getRandomTaskId(
                    Category.CentralFlightSystem,
                  )}`}
                >
                  <a>
                    <div className="opacity-60 mb-1">
                      {Category.CentralFlightSystem}
                    </div>
                    <progress
                      className="block progress progress-accent mb-4"
                      value={getCategoryProgressPercentage(
                        Category.CentralFlightSystem,
                      )}
                      max="100"
                    ></progress>
                  </a>
                </Link>
              </div>
              <div className="text-right w-1/2">
                <Link
                  href={`/tasks/${getRandomTaskId(
                    Category.VentilationThermalControl,
                  )}`}
                >
                  <a>
                    <div className="opacity-60 mb-1">
                      {Category.VentilationThermalControl}
                    </div>
                    <progress
                      className="block progress progress-secondary mb-4"
                      value={getCategoryProgressPercentage(
                        Category.VentilationThermalControl,
                      )}
                      max="100"
                    ></progress>
                  </a>
                </Link>
              </div>
            </div>
            <div className="bg-base-300 text-base-content border-primary border-4 border-double shadow-lg shadow-primary rounded-box mx-auto w-full lg:w-3/4 aspect-video flex flex-col justify-evenly items-center mb-2">
              <div className="font-mono text-4xl">{`<Spaceship>`}</div>
              <div>
                <div className="opacity-60">Gesamtpunkte</div>
                <div className="font-bold text-6xl">{getTotalScore()}</div>
              </div>
              <div className="font-mono text-4xl">{`</Spaceship>`}</div>
            </div>
            <div className="flex w-full gap-2 justify-center items-start">
              <div className="text-left w-1/2">
                <Link
                  href={`/tasks/${getRandomTaskId(
                    Category.CrewHealthHypersleep,
                  )}`}
                >
                  <a>
                    <progress
                      className="block progress progress-success mt-4 mb-1"
                      value={getCategoryProgressPercentage(
                        Category.CrewHealthHypersleep,
                      )}
                      max="100"
                    ></progress>
                    <div className="opacity-60">
                      {Category.CrewHealthHypersleep}
                    </div>
                  </a>
                </Link>
              </div>
              <div className="text-right w-1/2">
                <Link
                  href={`/tasks/${getRandomTaskId(
                    Category.CrewHealthHypersleep,
                  )}`}
                >
                  {/* TODO: use Category.SpaceRadiationProtection when it gets task */}
                  <a>
                    <progress
                      className="block progress progress-primary mt-4 mb-1"
                      value={getCategoryProgressPercentage(
                        Category.CrewHealthHypersleep,
                      )}
                      max="100"
                    ></progress>
                    <div className="opacity-60">
                      {Category.CrewHealthHypersleep}
                    </div>
                  </a>
                </Link>
              </div>
            </div>
          </div>

          <h2 className="font-mono text-2xl font-bold tracking-wider underline text-secondary decoration-accent mb-4">
            Kritische Codestellen
          </h2>
          <div className="w-max mx-auto mb-24">
            {allTasks.map((task) => {
              return (
                <Link key={task.uuid} href={`/tasks/${task.uuid}`}>
                  <a className="btn btn-link block w-fit">
                    <div key={task.uuid} className="flex flex-row items-center">
                      <TaskProgressIcon
                        taskProgress={getTaskProgress(task.uuid)}
                        className="h-8 w-8 mr-1"
                      />
                      {task.name}
                    </div>
                  </a>
                </Link>
              );
            })}
          </div>

          <div className="divider max-w-lg mx-auto mb-2"></div>
          <button
            className="btn btn-sm btn-outline btn-warning"
            onClick={() => resetProgress()}
          >
            <ExclamationIcon className="h-5 w-5 mr-1" />
            Fortschritt zurücksetzen
          </button>
        </div>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      allTasks,
    },
  };
};
