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
        <title>Soc Asklepios</title>
      </Head>

      <h1>Soc Asklepios</h1>
      <p>Gesamtpunkte: {getTotalScore()}</p>
      <p>
        Fortschritt Kategorie 1:{` `}
        {getCategoryProgressPercentage(Category.Category1)} %)
      </p>
      <ul>
        {allTasks.map((task) => (
          <li key={task.uuid}>
            <Link href={`/tasks/${task.uuid}`}>
              <a>
                {task.name}, {getTaskPoints(task.uuid)} Punkte (
                {getTaskProgress(task.uuid)})
              </a>
            </Link>
          </li>
        ))}
      </ul>
      <button onClick={() => resetProgress()}>Reset Progress</button>
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
