'use client';

import { getCodeLanguage } from '@blog/@features/post/utils/content';
import { CodeBlockObjectResponse } from '@blog/types/api-endpoints';
import { Highlight, themes } from 'prism-react-renderer';
import Prism from 'prismjs';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-tsx';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-yaml';

const CodeSnippet = ({ block }: { block: CodeBlockObjectResponse }) => {
  return (
    <Highlight
      theme={themes.github}
      code={block.code.rich_text[0].plain_text}
      language={getCodeLanguage(block.code.language)}
      prism={Prism}
    >
      {(highlight) => {
        const { tokens, getLineProps, getTokenProps } = highlight;
        return (
          <pre>
            <div className="relative mt-12 mb-20 w-full">
              <div className="bg-syntax-bg absolute top-1 right-0 z-[2] -translate-y-full rounded-t-lg px-3 pt-[2px] font-sans text-[18px] font-medium uppercase text-gray-700">
                {getCodeLanguage(block.code.language)}
              </div>
              <div className="bg-syntax-bg overflow-x-auto rounded-md p-8">
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
