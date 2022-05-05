import Link from 'next/link';
import { GetStaticPaths, GetStaticProps } from 'next';
import { allTasks, ITask } from '@/modules/tasks';
import Head from 'next/head';
import { Comment, CodeBlock, Input } from '@/common/components/';
import { useIndexedInputs, useUserInputEvaluation } from '@/common/hooks/';
import { useState } from 'react';

export default function Task({ taskData }: { taskData: ITask }) {
  // states
  const [userInputs, handleChangedInput] = useIndexedInputs();
  const [userInputEvaluation, evaluateInputs] = useUserInputEvaluation();
  const [isLineHintActive, setIsLineHintActive] = useState(false);

  // listeners
  const onClickEvaluate = () => {
    evaluateInputs(taskData.inputs, userInputs);
  };

  const toggleIsLineHintActive = () =>
    setIsLineHintActive((isLineHintActive) => !isLineHintActive);

  // methods
  const isSolved = () => {
    if (userInputEvaluation.length === 0) {
      return false;
    }
    return userInputEvaluation.every((isValid) => isValid === true);
  };

  // rendering
  return (
    <>
      <Head>
        <title>{taskData.title}</title>
      </Head>

      <h1 className="underline decoration-double">{taskData.title}</h1>

      <CodeBlock code={taskData.dirtyCode} />

      {isSolved() && (
        <>
          <CodeBlock code={taskData.cleanCode} />
          <Comment comment={taskData.comment} />
        </>
      )}

      {taskData.inputs.map((input, index) => (
        <Input
          key={index}
          index={index}
          inputData={input}
          handleChangedInput={handleChangedInput}
          isLineHintActive={isLineHintActive}
          isValid={userInputEvaluation[index]}
        />
      ))}

      <div className="my-4">
        <button className="mr-3" onClick={toggleIsLineHintActive}>
          Codestellen hervorheben
        </button>
        <button className="mr-3" onClick={onClickEvaluate}>
          Evaluieren
        </button>
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
