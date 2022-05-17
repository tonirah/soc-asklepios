import Head from 'next/head';
import { GetStaticProps } from 'next';
import { allTasks, Category, ITask } from '@/modules/tasks';
import Link from 'next/link';
import { useContext } from 'react';
import { ProgressContext } from '@/common/hooks/';
import { TaskProgressIcon } from '@/common/components';

export default function Home({ allTasks }: { allTasks: ITask[] }) {
  const {
    getTaskProgress,
    resetProgress,
    getCategoryProgressPercentage,
    getTotalScore,
  } = useContext(ProgressContext);

  return (
    <>
      <Head>
        <title>SOC Asklepios</title>
      </Head>

      <div className="container mx-auto text-center py-28 px-2">
        <h1 className="font-mono text-6xl font-bold tracking-wider underline text-primary-focus decoration-warning leading-relaxed mb-2">
          SOC Asklepios
        </h1>

        <div className="flex justify-center items-center gap-3 mb-8">
          <div className="stats flex-none">
            <div className="stat">
              <div className="stat-title">Gesamtpunkte</div>
              <div className="stat-value">{getTotalScore()}</div>
            </div>
          </div>
          <div className="">
            <div className="opacity-60 mb-1">
              {Category.CentralFlightSystem}
            </div>
            <progress
              className="block progress progress-success mb-4"
              value={getCategoryProgressPercentage(
                Category.CentralFlightSystem,
              )}
              max="100"
            ></progress>
            <div className="opacity-60 mb-1">
              {Category.VentilationThermalControl}
            </div>
            <progress
              className="block progress progress-accent mb-4"
              value={getCategoryProgressPercentage(
                Category.VentilationThermalControl,
              )}
              max="100"
            ></progress>
          </div>
        </div>
        <div className="divider max-w-5xl mx-auto mb-10"></div>

        <h2 className="font-mono text-2xl font-bold tracking-wider underline text-secondary decoration-warning mb-5">
          Tasks:
        </h2>
        <div className="w-max mx-auto mb-8">
          {allTasks.map((task) => {
            return (
              <div key={task.uuid} className="flex flex-row items-center">
                <TaskProgressIcon
                  taskProgress={getTaskProgress(task.uuid)}
                  className="h-8 w-8"
                />
                <Link href={`/tasks/${task.uuid}`}>
                  <a className="btn btn-link px-1">{task.name}</a>
                </Link>
              </div>
            );
          })}
        </div>
        <div className="divider max-w-5xl mx-auto mb-10"></div>

        <button
          className="btn btn-outline btn-accent"
          onClick={() => resetProgress()}
        >
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
