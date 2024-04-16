'use client';

import { CodeBlockObjectResponse } from '@blog/types/api-endpoints';
import { Highlight, themes } from 'prism-react-renderer';

const CodeSnippet = ({ block }: { block: CodeBlockObjectResponse }) => {
  return (
    <Highlight
      theme={themes.github}
      code={block.code.rich_text[0].plain_text}
      language={block.code.language}
    >
      {(highlight) => {
        const { tokens, getLineProps, getTokenProps } = highlight;
        return (
          <pre>
            <div className="relative mt-12 mb-20 w-full">
              <div className="bg-syntax-bg absolute top-0 right-6 z-[2] -translate-y-full rounded-t-lg px-3 pt-[2px] font-sans text-[18px] font-medium uppercase text-gray-700 lg:right-[14px]">
                {block.code.language}
              </div>
              <div className="bg-syntax-bg relative -mx-4 overflow-x-auto whitespace-pre-wrap rounded-md p-8 lg:-mx-8">
                {tokens.map((line, i) => (
                  <div
                    key={i}
                    {...getLineProps({
                      line,
                      style: { color: 'var(--color-syntax-txt)' },
                    })}
                  >
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token })} />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </pre>
        );
      }}
    </Highlight>
  );
};

export default CodeSnippet;
