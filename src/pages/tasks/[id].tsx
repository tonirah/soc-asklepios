import Link from 'next/link';
import { GetStaticPaths, GetStaticProps } from 'next';
import { allTasks, ITask } from '@/modules/tasks';
import Head from 'next/head';
import { CodeBlock, Comment, Input } from '@/common/components/';
import {
  ProgressContext,
  TaskProgress,
  useIndexedInputs,
  useInputEvaluation,
} from '@/common/hooks/';
import { useContext, useEffect, useState } from 'react';

export default function Task({ taskData }: { taskData: ITask }) {
  const { setTaskProgress, getTaskPoints, getTaskProgress, useVisitedTimer } =
    useContext(ProgressContext);

  const [isLineHintActive, setIsLineHintActive] = useState(false);
  const toggleIsLineHintActive = () =>
    setIsLineHintActive((isLineHintActive) => !isLineHintActive);

  const [userInputs, handleChangedInput] = useIndexedInputs();

  const [inputEvaluation, isSolved, evaluateInputs] = useInputEvaluation();
  const onClickEvaluate = () => {
    evaluateInputs(taskData.inputs, userInputs);
  };

  useEffect(() => {
    if (isSolved) {
      setIsLineHintActive(true);
      setTaskProgress(taskData.uuid, TaskProgress.Solved);
    }
  }, [isSolved, setIsLineHintActive, setTaskProgress, taskData.uuid]);

  useVisitedTimer(taskData.uuid);

  return (
    <>
      <Head>
        <title>{taskData.name}</title>
      </Head>

      <h1 className="underline decoration-double">
        {taskData.name} (Status: {getTaskProgress(taskData.uuid)}, Punkte:{` `}
        {getTaskPoints(taskData.uuid)})
      </h1>

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
          isValid={inputEvaluation[index]}
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
  const paths = allTasks.map((task) => ({
    params: { id: task.uuid },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // other inputs handled by next router
  const uuid = params?.id as string;

  const taskData = allTasks.find((task) => task.uuid === uuid);
  return {
    props: {
      taskData,
    },
  };
};
