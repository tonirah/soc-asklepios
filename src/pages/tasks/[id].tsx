import Link from 'next/link';
import { GetStaticPaths, GetStaticProps } from 'next';
import { allTasks, ITask } from '@/modules/tasks';
import Head from 'next/head';
import { Comment, CodeBlock, Input } from '@/common/components/';
import useIndexedInputs from '@/common/hooks/useIndexedInputs';
import { useState } from 'react';

export default function Task({ taskData }: { taskData: ITask }) {
  const [selectedInputs, inputDispatch] = useIndexedInputs([]);

  const [isLineHintActive, setIsLineHintActive] = useState(false);
  const toggleIsLineHintActive = () =>
    setIsLineHintActive((isLineHintActive) => !isLineHintActive);

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
        <Input
          key={index}
          index={index}
          inputData={input}
          inputDispatch={inputDispatch}
          isLineHintActive={isLineHintActive}
        />
      ))}
      <Comment comment={taskData.comment} />
      <div className="my-4">
        <button className="mr-3" onClick={toggleIsLineHintActive}>
          Codestellen hervorheben
        </button>
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
