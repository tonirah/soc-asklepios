import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import java from 'react-syntax-highlighter/dist/cjs/languages/prism/java';
const dark =
  require(`react-syntax-highlighter/dist/cjs/styles/prism/darcula`).default;
const light =
  require(`react-syntax-highlighter/dist/cjs/styles/prism/one-light`).default;
console.log(light);
SyntaxHighlighter.registerLanguage(`java`, java);
import rangeParser from 'parse-numeric-range';
import React from 'react';
import { useTheme } from 'next-themes';

const darkColors = {
  red: `#702e34`,
  green: `#1c5037`,
};

const lightColors = {
  red: `#ffd7d5`,
  green: `#ccffd8`,
};

export enum HighlightColor {
  Red,
  Green,
}

const getColorValue = (highlightColor?: HighlightColor, theme?: string) => {
  const colors = theme === `dark` ? darkColors : lightColors;
  if (highlightColor === HighlightColor.Red) {
    return colors.red;
  }
  return colors.green;
};

const getLineProps = (
  lineNumber: number,
  isLineHintActive: boolean,
  lineNumberArray: number[],
  highlightColor?: HighlightColor,
  theme?: string,
) => {
  const htmlProps = {
    style: {
      display: `block`,
      backgroundColor: `transparent`,
    },
  };

  if (isLineHintActive && lineNumberArray.includes(lineNumber)) {
    htmlProps.style.backgroundColor = getColorValue(highlightColor, theme);
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
  const { theme } = useTheme();

  const lineNumberArray = [...new Set(rangeParser(highlightedLines))];

  return (
    <div className={className}>
      <SyntaxHighlighter
        language="java"
        style={theme === `dark` ? dark : light}
        customStyle={
          // trick to reapply customStyle after theme change
          theme === `dark`
            ? { backgroundColor: `transparent` }
            : { backgroundColor: `inherit` }
        }
        showLineNumbers={true}
        wrapLines={true}
        lineProps={(lineNumber) =>
          getLineProps(
            lineNumber,
            isLineHintActive,
            lineNumberArray,
            highlightColor,
            theme,
          )
        }
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
