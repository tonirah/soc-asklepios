import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import java from 'react-syntax-highlighter/dist/cjs/languages/prism/java';
import style from 'react-syntax-highlighter/dist/cjs/styles/prism/darcula';
SyntaxHighlighter.registerLanguage(`java`, java);
import rangeParser from 'parse-numeric-range';
import React from 'react';

const redColor = `#702e34`;
const greenColor = `#1c5037`;
const neutralColor = `#475569`;

export enum HighlightColor {
  Red = `Red`,
  Green = `Green`,
  Neutral = `Neutral`,
}

const getColorValue = (highlightColor?: HighlightColor) => {
  switch (highlightColor) {
    case HighlightColor.Green:
      return greenColor;
    case HighlightColor.Red:
      return redColor;
    default:
      return neutralColor;
  }
};

const getLineProps = (
  lineNumber: number,
  isLineHintActive: boolean,
  lineNumberArray: number[],
  highlightColor?: HighlightColor,
) => {
  const htmlProps = {
    style: {
      display: `block`,
      backgroundColor: `transparent`,
    },
  };

  if (isLineHintActive && lineNumberArray.includes(lineNumber)) {
    htmlProps.style.backgroundColor = getColorValue(highlightColor);
  }
  return htmlProps;
};

export function CodeBlock({
  code,
  highlightedLines,
  highlightColor,
  isLineHintActive,
  className,
}: {
  code: string;
  highlightedLines: string;
  highlightColor?: HighlightColor;
  isLineHintActive: boolean;
  className?: string;
}) {
  const lineNumberArray = [...new Set(rangeParser(highlightedLines))];

  return (
    <div className={className}>
      <SyntaxHighlighter
        language="java"
        style={style}
        customStyle={{ backgroundColor: `transparent` }}
        showLineNumbers={true}
        wrapLines={true}
        lineProps={(lineNumber) =>
          getLineProps(
            lineNumber,
            isLineHintActive,
            lineNumberArray,
            highlightColor,
          )
        }
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
