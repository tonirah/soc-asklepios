import Link from 'next/link';
import { GetStaticPaths, GetStaticProps } from 'next';
import { allTasks, ITask } from '@/tasks';
import Head from 'next/head';

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = allTasks.map((task, index) => ({
    params: { id: index.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // other inputs handled by next router
  const rawId = params?.id as string;
  const index = Number.parseInt(rawId, 10);

  const taskData = allTasks[index];
  return {
    props: {
      taskData,
    },
  };
};

export default function Task({ taskData }: { taskData: ITask }) {
  return (
    <>
      <Head>
        <title>{taskData.title}</title>
      </Head>
      <h1>{taskData.title}</h1>
      <Link href={`/`}>
        <a>Back to Home</a>
      </Link>
    </>
  );
}
