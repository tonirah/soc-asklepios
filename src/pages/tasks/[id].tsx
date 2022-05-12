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

  useVisitedTimer(taskData.uuid, getTaskProgress);

  return (
    <>
      <Head>
        <title>{taskData.name}</title>
      </Head>

      <div className="container mx-auto py-28 px-2">
        <h1 className="font-mono text-3xl font-bold tracking-wider underline text-primary-focus decoration-warning leading-relaxed mb-5">
          {taskData.name} (Status: {getTaskProgress(taskData.uuid)}, Punkte:
          {` `}
          {getTaskPoints(taskData.uuid)})
        </h1>
        <div className="flex flex-col lg:flex-row gap-3 mb-3 w-full">
          <div className="lg:w-0 flex-auto">
            <CodeBlock code={taskData.dirtyCode} />
          </div>
          {isSolved && (
            <div className="lg:w-0 flex-auto">
              <CodeBlock code={taskData.cleanCode} />
            </div>
          )}
        </div>

        {isSolved && <Comment comment={taskData.comment} />}

        <div className="flex flex-wrap gap-3 mt-12">
          {taskData.inputs.map((input, index) => (
            <Input
              key={`input-${index}`}
              index={index}
              inputData={input}
              handleChangedInput={handleChangedInput}
              isLineHintActive={isLineHintActive}
              isValid={inputEvaluation[index]}
            />
          ))}
        </div>

        <div className="mt-12 mb-3 flex">
          <label
            htmlFor="lineHighlighter"
            className="label justify-start gap-1.5 cursor-pointer p-0"
          >
            <input
              className="toggle"
              type="checkbox"
              id="lineHighlighter"
              onClick={toggleIsLineHintActive}
              onChange={() => ({})} // controlled by 'isLineHintActive', changed via click or elsewhere
              checked={isLineHintActive}
            />
            <span className="label-text">Codestellen hervorheben</span>
          </label>
        </div>

        <div className="flex gap-3">
          <button className="btn btn-primary" onClick={onClickEvaluate}>
            Evaluieren
          </button>
          <Link href={`/`}>
            <a className="btn">Zurück</a>
          </Link>
        </div>
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
