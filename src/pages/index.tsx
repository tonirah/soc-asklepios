import Head from 'next/head';
import { GetStaticProps } from 'next';
import { allTasks, ITask } from '@/modules/tasks';
import Link from 'next/link';
import { useContext } from 'react';
import { ProgressContext } from '@/common/hooks/';
import { Spaceship, TaskProgressIcon, ThemeChanger } from '@/common/components';
import { InformationCircleIcon, SparklesIcon } from '@heroicons/react/outline';

export default function Home({ allTasks }: { allTasks: ITask[] }) {
  const { getTaskProgress } = useContext(ProgressContext);

  const title = `SOC Asklepios`;
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <h1 className="font-mono text-6xl font-bold tracking-wider underline text-primary-focus decoration-accent leading-relaxed">
        <SparklesIcon className="h-16 w-16 inline-block mr-2 text-secondary" />
        {title}
        <span className="mx-6 w-28 inline-block">
          <ThemeChanger />
        </span>
      </h1>

      <div className="mx-auto w-full rounded-box xl:w-4/5 2xl:w-2/3 py-2 mb-12">
        <Spaceship />
      </div>

      <div className="bg-neutral/70 rounded-box shadow-xl mb-12 text-neutral-content pt-8 pb-3 px-8">
        <p className="font-mono">
          <span className="font-bold">„Im Jahr 2094.</span> Du befindest dich
          auf einer interplanetaren Reise, und warst bis gerade eben im
          Hyperschlaf. Die AI (SOLID) des Schiffes 'SOC Asklepios' hat dich
          geweckt. Du musst ihr helfen, die Boardsoftware zu prüfen und zu
          refaktorisieren, um sicher auf dem Planet 'Yagni' landen zu können.
          <span className="font-bold">“</span>
        </p>
        <Link href={`/info`}>
          <a className="btn btn-link">
            <InformationCircleIcon className="h-6 w-6 mr-1 text-info" />
            Story, Mission, Refactorings
          </a>
        </Link>
      </div>

      <h2 className="font-mono text-2xl font-bold tracking-wider underline text-secondary decoration-accent mb-4">
        Kritische Codestellen
      </h2>
      <div className="w-max mx-auto">
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
