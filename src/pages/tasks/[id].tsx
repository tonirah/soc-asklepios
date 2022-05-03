import Link from 'next/link';
import { GetStaticPaths, GetStaticProps } from 'next';
import { allTasks, ITask } from '@/tasks';
import Head from 'next/head';

import rangeParser from 'parse-numeric-range';
import ReactMarkdown from 'react-markdown';

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
      <h1 className="underline decoration-double">{taskData.title}</h1>
      Schwierigkeit: {taskData.difficulty}
      <br />
      Kategorie: {taskData.category}
      <br />
      Code:
      <pre>
        <code>{taskData.dirtyCode}</code>
      </pre>
      Lösung (Hervorgehobene Zeilen):{` `}
      {rangeParser(taskData.cleanCodeHighlightedLines)}
      <br />
      Lösung:
      <pre>
        <code>{taskData.cleanCode}</code>
      </pre>
      <br />
      {taskData.inputs.map((input, index) => (
        <>
          <h2>Input {index + 1}</h2>
          <p>Zeilen (raw): {input.lines}</p>
          <p>Zeilen (parsed): {rangeParser(input.lines).join(`, `)}</p>
          <br />
          {input.options.map((option, index) => (
            <p key={`option-` + index}>
              Option: {option.value + `, ` + (option.correct === true)}
            </p>
          ))}
          <br />
        </>
      ))}
      Kommentar (raw): {taskData.comment}
      <br />
      Kommentar (parsed):
      <br />
      <ReactMarkdown linkTarget="_blank">{taskData.comment}</ReactMarkdown>
      <br />
      <Link href={`/`}>
        <a>Zurück</a>
      </Link>
    </>
  );
}
