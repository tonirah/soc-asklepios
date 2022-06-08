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
  } = useContext(ProgressContext);

  const title = `SOC Asklepios`;
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <div className="container mx-auto text-center py-10 px-2">
        <h1 className="font-mono text-6xl font-bold tracking-wider underline text-primary-focus decoration-warning leading-relaxed">
          <SparklesIcon className="h-16 w-16 inline-block mr-2 text-secondary" />
          {title}
        </h1>

        <div className="flex flex-col xl:flex-row gap-3 items-center w-full bg-neutral border-neutral border rounded-box shadow-xl mb-12">
          <div className="flex flex-col xl:w-0 flex-auto">
            <div className="text-neutral-content pt-8 pb-3 px-8">
              <p>
                „Im Jahr 2094. Du befindest dich auf einer interplanetaren
                Reise, und warst bis gerade eben im Hyperschlaf. Die AI (SOLID)
                des Schiffes 'SOC Asklepios' hat dich geweckt. Du musst ihr
                helfen, die Boardsoftware zu prüfen und zu refaktorisieren, um
                sicher auf dem Planet 'Yagni' landen zu können.“
              </p>
              <Link href={`/info`}>
                <a className="btn btn-link">
                  <InformationCircleIcon className="h-6 w-6 mr-1 text-info" />
                  Story, Mission, Refactorings
                </a>
              </Link>
            </div>
          </div>
          <div className=" flex flex-col xl:w-0 flex-auto bg-base-300 w-full">
            <div className="flex justify-evenly items-center gap-3 py-4 px-2">
              <div className="stats flex-none bg-inherit">
                <div className="stat">
                  <div className="stat-title">Gesamtpunkte</div>
                  <div className="stat-value">{getTotalScore()}</div>
                </div>
              </div>
              <div>
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
                <div className="opacity-60 mb-1">
                  {Category.CrewHealthHypersleep}
                </div>
                <progress
                  className="block progress progress-success  mb-4"
                  value={getCategoryProgressPercentage(
                    Category.CrewHealthHypersleep,
                  )}
                  max="100"
                ></progress>
                {/* TODO: use Category.SpaceRadiationProtection when it gets task */}
                <div className="opacity-60 mb-1">
                  {Category.CrewHealthHypersleep}
                </div>
                <progress
                  className="block progress progress-primary mb-4"
                  value={getCategoryProgressPercentage(
                    Category.CrewHealthHypersleep,
                  )}
                  max="100"
                ></progress>
              </div>
            </div>
          </div>
        </div>

        <h2 className="font-mono text-2xl font-bold tracking-wider underline text-secondary decoration-warning mb-4">
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
          className="btn btn-sm btn-outline btn-accent"
          onClick={() => resetProgress()}
        >
          <ExclamationIcon className="h-5 w-5 mr-1" />
          Fortschritt zurücksetzen
        </button>
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
