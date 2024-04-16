'use client';

import { Sandpack } from '@codesandbox/sandpack-react';
import { nightOwl } from '@codesandbox/sandpack-themes';

const CodePlayground = ({ block }: { block: any }) => {
  return (
    <div className="-mx-4 max-w-[750px] py-6 lg:-mx-8">
      <Sandpack
        theme={nightOwl}
        template={block.code.template}
        files={block.code.files}
        options={{
          classes: {
            'sp-layout': 'flex-col',
            'sp-stack': '!w-full !flex-none',
          },
        }}
      />
    </div>
  );
};

export default CodePlayground;
