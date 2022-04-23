import Head from 'next/head';
import { GetStaticProps } from 'next';
import { allTasks, ITask } from '@/tasks';

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      allTasks,
    },
  };
};

export default function Home({ allTasks }: { allTasks: ITask[] }) {
  return (
    <>
      <Head>
        <title>Soc Asklepios</title>
      </Head>
      <ul>
        {allTasks.map((task) => (
          <li key={task.title}>{task.title}</li>
        ))}
      </ul>
    </>
  );
}
