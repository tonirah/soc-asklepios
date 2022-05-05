import Link from 'next/link';
import { GetStaticPaths, GetStaticProps } from 'next';
import { allTasks, ITask } from '@/modules/tasks';
import Head from 'next/head';
import { Comment, CodeBlock, Input } from '@/common/components/';
import { useIndexedInputs, useUserInputEvaluation } from '@/common/hooks/';
import { useEffect, useMemo, useState } from 'react';

export default function Task({ taskData }: { taskData: ITask }) {
  const [isLineHintActive, setIsLineHintActive] = useState(false);
  const toggleIsLineHintActive = () =>
    setIsLineHintActive((isLineHintActive) => !isLineHintActive);

  const [userInputs, handleChangedInput] = useIndexedInputs();

  const [userInputEvaluation, evaluateInputs] = useUserInputEvaluation();
  const onClickEvaluate = () => {
    evaluateInputs(taskData.inputs, userInputs);
  };

  // based on 'userInputEvaluation', only calculated when changed
  const isSolved = useMemo(() => {
    if (userInputEvaluation.length === 0) {
      return false;
    }
    return userInputEvaluation.every((isValid) => isValid === true);
  }, [userInputEvaluation]);
  useEffect(() => {
    if (isSolved) {
      setIsLineHintActive(true);
    }
  }, [isSolved]);

  return (
    <>
      <Head>
        <title>{taskData.name}</title>
      </Head>

      <h1 className="underline decoration-double">{taskData.name}</h1>

      <CodeBlock code={taskData.dirtyCode} />

      {isSolved && (
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

      <div className="my-4 mx-3 flex gap-3">
        <div>
          <input
            className="mr-1"
            type="checkbox"
            id="lineHighlighter"
            onClick={toggleIsLineHintActive}
            onChange={() => ({})} // controlled by 'isLineHintActive', changed via click or elsewhere
            checked={isLineHintActive}
          />
          <label htmlFor="lineHighlighter">Codestellen hervorheben</label>
        </div>
        <button onClick={onClickEvaluate}>Evaluieren</button>
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
