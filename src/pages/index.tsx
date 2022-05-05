import Head from 'next/head';
import { GetStaticProps } from 'next';
import { allTasks, ITask } from '@/modules/tasks';
import Link from 'next/link';
import { useContext } from 'react';
import { ProgressContext, ProgressState } from '@/common/hooks/';

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
          <li key={`task-${index}`}>
            <Link href={`/tasks/${task.uuid}`}>
              <a>{task.name}</a>
            </Link>
          </li>
        ))}
      </ul>
      <div className="my-4 flex gap-4">
        <button
          onClick={() =>
            setTaskProgress(allTasks[0].uuid, ProgressState.Visited)
          }
        >
          Visit Task 1
        </button>
        <button
          onClick={() =>
            setTaskProgress(allTasks[0].uuid, ProgressState.Solved)
          }
        >
          Solve Task 1
        </button>
        <button
          onClick={() =>
            setTaskProgress(allTasks[1].uuid, ProgressState.Visited)
          }
        >
          Visit Task 2
        </button>
        <button
          onClick={() =>
            setTaskProgress(allTasks[1].uuid, ProgressState.Solved)
          }
        >
          Solve Task 2
        </button>
        <button onClick={() => resetProgress()}>Reset Progress</button>
      </div>

      {getProgress().map((taskProgress, index) => (
        <div key={index}>
          {taskProgress?.uuid}: {taskProgress?.progressState}
        </div>
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
