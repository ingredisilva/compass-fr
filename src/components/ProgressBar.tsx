import React from 'react';

type Props = {
  progress: number;
};
function ProgressBar({ progress }: Props) {
  return (
    <div className='relative h-3 w-64 max-w-xl overflow-hidden rounded-full'>
      <div className='absolute h-full w-full bg-gray-200'></div>
      <div
        className='absolute h-full w-full bg-green-500'
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
}

export default ProgressBar;
