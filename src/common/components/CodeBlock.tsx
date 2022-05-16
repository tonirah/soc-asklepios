import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import java from 'react-syntax-highlighter/dist/cjs/languages/prism/java';
import style from 'react-syntax-highlighter/dist/cjs/styles/prism/darcula';
SyntaxHighlighter.registerLanguage(`java`, java);

export function CodeBlock({
  code,
  className,
}: {
  code: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <SyntaxHighlighter
        language="java"
        style={style}
        showLineNumbers={true}
        customStyle={{ background: `none` }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
