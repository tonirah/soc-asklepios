import Link from 'next/link';
import { GetStaticPaths, GetStaticProps } from 'next';
import { allTasks, IInputData, InputType, ITask } from '@/modules/tasks';
import Head from 'next/head';
import {
  CodeBlock,
  Comment,
  HighlightColor,
  Input,
  TaskProgressIcon,
} from '@/common/components/';
import {
  ProgressContext,
  TaskProgress,
  useIndexedInputs,
  useInputEvaluation,
} from '@/common/hooks/';
import { useContext, useEffect, useState } from 'react';
import classNames from 'classnames';
import { parseRequiredBoolean } from '@/common/utils/parseRequired';
import { ArrowCircleLeftIcon, BeakerIcon } from '@heroicons/react/outline';

const CODE_SMELLS_ENABLED = parseRequiredBoolean(
  process.env.CODE_SMELLS_ENABLED,
);

function getTaskInputs(taskInputs: IInputData[], codeSmellsEnabled: boolean) {
  if (!codeSmellsEnabled) {
    return taskInputs.filter(({ type }) => type !== InputType.CodeSmell);
  }
  return taskInputs;
}

export default function Task({ taskData }: { taskData: ITask }) {
  const taskInputs = getTaskInputs(taskData.inputs, CODE_SMELLS_ENABLED);

  const { setTaskProgress, getTaskPoints, getTaskProgress, useVisitedTimer } =
    useContext(ProgressContext);

  const [isLineHintActive, setIsLineHintActive] = useState(false);
  const toggleIsLineHintActive = () =>
    setIsLineHintActive((isLineHintActive) => !isLineHintActive);

  const [userInputs, handleChangedInput] = useIndexedInputs();

  const [inputEvaluation, isSolved, evaluateInputs] = useInputEvaluation();
  const onClickEvaluate = () => {
    evaluateInputs(taskInputs, userInputs);
  };

  useEffect(() => {
    if (isSolved) {
      setIsLineHintActive(true);
      setTaskProgress(taskData.uuid, TaskProgress.Solved);
    }
  }, [isSolved, setIsLineHintActive, setTaskProgress, taskData.uuid]);

  useVisitedTimer(taskData.uuid, getTaskProgress);

  const dirtyCodeHighlightedLines = taskInputs
    .map((input) => input.lines)
    .join();

  return (
    <>
      <Head>
        <title>{taskData.name}</title>
      </Head>

      <div className="container mx-auto py-10 px-2">
        <div className="flex flex-row items-center mb-3">
          <TaskProgressIcon
            className="h-16 w-16 mr-1 shrink-0"
            taskProgress={getTaskProgress(taskData.uuid)}
          />
          <div>
            <h1 className="font-mono text-3xl font-bold tracking-wider underline text-primary-focus decoration-warning">
              {taskData.name}
            </h1>
            <span className="font-mono tracking-wider text-warning mr-4">
              {taskData.category},
            </span>
            <span className="font-mono tracking-wider text-info">
              Punkte:{` `}
              <span className="font-bold">{getTaskPoints(taskData.uuid)}</span>
            </span>
          </div>
        </div>

        <div className="flex flex-col xl:flex-row gap-3 mb-8 w-full items-stretch">
          <div className=" flex flex-col justify-end 2xl:justify-start xl:w-0 flex-auto bg-base-300 border border-neutral shadow-xl">
            <CodeBlock
              code={taskData.dirtyCode}
              highlightedLines={dirtyCodeHighlightedLines}
              highlightColor={HighlightColor.Red}
              isLineHintActive={isLineHintActive}
              className="text-sm"
            />
          </div>
          {isSolved && (
            <div className=" flex flex-col justify-end 2xl:justify-start xl:w-0 flex-auto bg-base-300 border border-neutral shadow-xl">
              <CodeBlock
                code={taskData.cleanCode}
                highlightedLines={taskData.cleanCodeHighlightedLines}
                highlightColor={HighlightColor.Green}
                isLineHintActive={isLineHintActive}
                className="text-sm"
              />
            </div>
          )}
        </div>
        <div className="flex flex-wrap gap-3 mb-3">
          {taskInputs.map((input, index) => (
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
        {isSolved && <Comment comment={taskData.comment} />}
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
          <button
            className={classNames(`btn`, {
              [`btn-primary`]: !isSolved,
              [`btn-disabled`]: isSolved,
            })}
            onClick={onClickEvaluate}
          >
            <BeakerIcon className="h-5 w-5 mr-1" />
            Evaluieren
          </button>
          <Link href={`/`}>
            <a
              className={classNames(`btn`, {
                [`btn-primary`]: isSolved,
              })}
            >
              <ArrowCircleLeftIcon className="h-5 w-5 mr-1" />
              Zurück
            </a>
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
