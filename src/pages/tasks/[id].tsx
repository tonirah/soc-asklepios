import Link from 'next/link';
import { GetStaticPaths, GetStaticProps } from 'next';
import { allTasks, ITask } from '@/tasks';
import Head from 'next/head';
import { Comment } from '@/components/Comment';
import { CodeBlock } from '@/components/CodeBlock';
import { Input } from '@/components/Input';
import useIndexedInputs from '@/common/hooks/useIndexedInputs';

export default function Task({ taskData }: { taskData: ITask }) {
  const [selectedInputs, inputDispatch] = useIndexedInputs([]);

  return (
    <>
      <Head>
        <title>{taskData.title}</title>
      </Head>
      <h1 className="underline decoration-double">{taskData.title}</h1>
      <ul>
        {selectedInputs.map((selectedInput, index) => (
          <li key={index}>{selectedInput}</li>
        ))}
      </ul>
      <CodeBlock code={taskData.dirtyCode} />
      <CodeBlock code={taskData.cleanCode} />
      {taskData.inputs.map((input, index) => (
        <div key={index} className="my-4">
          <Input
            index={index}
            inputData={input}
            inputDispatch={inputDispatch}
          />
        </div>
      ))}
      <Comment comment={taskData.comment} />
      <div className="my-4">
        <button className="mr-3"> Lösung anzeigen</button>
        <Link href={`/`}>
          <a>Zurück</a>
        </Link>
      </div>
    </>
  );
}

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
