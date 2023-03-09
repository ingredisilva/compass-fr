import React from 'react';

import DailyPlanner from '@/components/Features/DailyPlanner';
import ProjectOverviewCard from '@/components/ProjectOverviewCard';

interface DateFormatOptions {
  month?: 'long' | 'short';
  day?: 'numeric' | '2-digit';
}
export default function Content() {
  const today = new Date();
  const options: DateFormatOptions = { day: 'numeric', month: 'long' };
  // eslint-disable-next-line unused-imports/no-unused-vars
  const formattedDate = today.toLocaleDateString('pt-BR', options);

  return (
    <>
      <div className='flex flex-col gap-4'>
        <div className='flex gap-4'>
          <span className='flex flex-wrap gap-4'>
            <p className='text-4xl text-gray-400'>Welcome, </p>
            <h4 className='text-4xl font-black'>Ingredi!</h4>
          </span>
        </div>{' '}
        <p className='text-sm text-gray-400'>This is your life.</p>
        {/* <p className='font-secondary text-2xl'>Hoje, {formattedDate}</p> */}
        <div className='flex flex-col gap-4'>
          <h2 className='mb-4 mt-8 text-xs font-bold'>Current Projects</h2>
          <ProjectOverviewCard />
          <DailyPlanner date={undefined} />
          {/*  <TasksCard /> */}
        </div>
      </div>
    </>
  );
}
