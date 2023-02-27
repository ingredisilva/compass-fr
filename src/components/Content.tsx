import React from 'react';

import TasksCard from '@/components/TasksCard';

export default function Content() {
  return (
    <>
      <div className='my-10 flex flex-col gap-2'>
        <span className=''>
          <p className='text-4xl text-gray-600'>Welcome,</p>
          <h4 className='text-4xl font-black'>Ingredi</h4>
        </span>
        <p className='text-sm text-gray-400'>Here's your progress this week!</p>
      </div>
      <div>
        <TasksCard />
      </div>
    </>
  );
}
