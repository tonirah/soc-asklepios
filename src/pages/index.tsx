import Head from 'next/head';
import { GetStaticProps } from 'next';
import { allTasks, ITask } from '@/modules/tasks';
import Link from 'next/link';

export default function Home({ allTasks }: { allTasks: ITask[] }) {
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
