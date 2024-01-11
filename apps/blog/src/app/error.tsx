'use client';

import { useEffect } from 'react';

const Error = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  useEffect(() => {
    // log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="text-center">
      <p className="text-base font-semibold text-indigo-600">500</p>
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
        Server error
      </h1>
      <p className="mt-6 text-base leading-7 text-gray-600">
        Oops something went wrong.
      </p>
      <div className="flex items-center justify-center mt-10 gap-x-6">
        <button onClick={() => reset()}>Try again</button>
      </div>
    </div>
  );
};

export default Error;
