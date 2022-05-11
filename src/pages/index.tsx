import Head from 'next/head';
import { GetStaticProps } from 'next';
import { allTasks, Category, ITask } from '@/modules/tasks';
import Link from 'next/link';
import { useContext } from 'react';
import { ProgressContext } from '@/common/hooks/';

export default function Home({ allTasks }: { allTasks: ITask[] }) {
  const {
    getTaskProgress,
    resetProgress,
    getTaskPoints,
    getCategoryProgressPercentage,
    getTotalScore,
  } = useContext(ProgressContext);

  return (
    <>
      <Head>
        <title>SOC Asklepios</title>
      </Head>

      <div className="container mx-auto text-center py-28 px-2">
        <h1 className="font-mono text-6xl font-bold tracking-wider underline text-primary-focus decoration-warning leading-relaxed -mb-2">
          SOC Asklepios
        </h1>

        <div className="flex justify-center items-start gap-3 mb-12">
          <div className="stats">
            <div className="stat">
              <div className="stat-title">Gesamtpunkte</div>
              <div className="stat-value">{getTotalScore()}</div>
            </div>
          </div>
          <div className="px-6 py-4">
            <div className="opacity-60 mb-3">Fortschritt Kategorie 1</div>
            <progress
              className="block progress progress-success"
              value={getCategoryProgressPercentage(Category.Category1)}
              max="100"
            ></progress>
          </div>
        </div>

        {allTasks.map((task) => {
          const taskProgress = getTaskProgress(task.uuid);
          return (
            <Link key={task.uuid} href={`/tasks/${task.uuid}`}>
              <a className="btn btn-block btn-link">
                {task.name} ({getTaskPoints(task.uuid)} Punkte,{` `}
                {taskProgress ? taskProgress : `Not yet visited`})
              </a>
            </Link>
          );
        })}
        <button
          className="btn btn-outline btn-accent mt-16"
          onClick={() => resetProgress()}
        >
          Reset Progress
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
