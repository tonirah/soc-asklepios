import Head from 'next/head';
import { GetStaticProps } from 'next';
import { allTasks, ITask } from '@/modules/tasks';
import Link from 'next/link';
import { useContext } from 'react';
import { ProgressContext, TaskProgress } from '@/common/hooks/ProgressProvider';

export default function Home({ allTasks }: { allTasks: ITask[] }) {
  const { getProgress, setTaskProgress, resetProgress } =
    useContext(ProgressContext);

  return (
    <>
      <Head>
        <title>Soc Asklepios</title>
      </Head>
      <ul>
        {allTasks.map((task, index) => (
          <li key={task.title}>
            <Link href={`/tasks/${index}`}>
              <a>{task.title}</a>
            </Link>
          </li>
        ))}
      </ul>
      <div className="my-4 flex gap-4">
        <button onClick={() => setTaskProgress(0, TaskProgress.Visited)}>
          Visit Task 1
        </button>
        <button onClick={() => setTaskProgress(0, TaskProgress.Solved)}>
          Solve Task 1
        </button>
        <button onClick={() => setTaskProgress(1, TaskProgress.Visited)}>
          Visit Task 2
        </button>
        <button onClick={() => setTaskProgress(1, TaskProgress.Solved)}>
          Solve Task 2
        </button>
        <button onClick={() => resetProgress()}>Reset Progress</button>
      </div>

      {getProgress().map((taskProgress, index) => (
        <div key={index}>{taskProgress}</div>
      ))}
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
