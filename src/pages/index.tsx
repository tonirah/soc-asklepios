import Head from 'next/head';
import { GetStaticProps } from 'next';
import { allTasks, ITask } from '@/modules/tasks';
import Link from 'next/link';
import { useContext } from 'react';
import { ProgressContext, TaskProgress } from '@/common/hooks/';

export default function Home({ allTasks }: { allTasks: ITask[] }) {
  const { setTaskProgress, getTaskProgress, resetProgress } =
    useContext(ProgressContext);

  return (
    <>
      <Head>
        <title>Soc Asklepios</title>
      </Head>
      <ul>
        {allTasks.map((task, index) => (
          <li key={`task-${index}`}>
            <Link href={`/tasks/${task.uuid}`}>
              <a>
                {task.name} ({getTaskProgress(task.uuid)})
              </a>
            </Link>
          </li>
        ))}
      </ul>
      <div className="my-4 flex gap-4">
        <button
          onClick={() =>
            setTaskProgress(allTasks[0].uuid, TaskProgress.Visited)
          }
        >
          Visit Task 1
        </button>
        <button
          onClick={() => setTaskProgress(allTasks[0].uuid, TaskProgress.Solved)}
        >
          Solve Task 1
        </button>
        <button
          onClick={() =>
            setTaskProgress(allTasks[1].uuid, TaskProgress.Visited)
          }
        >
          Visit Task 2
        </button>
        <button
          onClick={() => setTaskProgress(allTasks[1].uuid, TaskProgress.Solved)}
        >
          Solve Task 2
        </button>
        <button onClick={() => resetProgress()}>Reset Progress</button>
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
