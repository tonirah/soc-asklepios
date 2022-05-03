import ReactMarkdown from 'react-markdown';

export function Comment(props: { comment: string }) {
  return (
    <>
      Kommentar:
      <ReactMarkdown linkTarget="_blank">{props.comment}</ReactMarkdown>
    </>
  );
}
