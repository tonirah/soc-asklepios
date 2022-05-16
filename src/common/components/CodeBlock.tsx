import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import java from 'react-syntax-highlighter/dist/cjs/languages/prism/java';
import style from 'react-syntax-highlighter/dist/cjs/styles/prism/prism';
SyntaxHighlighter.registerLanguage(`java`, java);

export const codeBackgroundColor = style[`pre[class*="language-"]`]?.background;

export function CodeBlock({ code }: { code: string }) {
  return (
    <SyntaxHighlighter language="java" style={style} showLineNumbers={true}>
      {code}
    </SyntaxHighlighter>
  );
}
