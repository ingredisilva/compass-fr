import Projects from 'public/svg/projects.svg';
import React from 'react';

const userProgressData = [
  {
    userid: '',
    username: '',
    activeProjects: 6,
    completedProjects: 6,
    hoursOfSleep: 1435,
    workOuts: 577,
  },
];

function TasksCard() {
  return (
    <div className='rounded-xl border bg-slate-50'>
      {userProgressData.map((progress, index) => {
        return (
          <div key={index} className='m-2 p-4'>
            <p className='text-lg font-semibold'>Projects Worked</p>
            <span className='flex items-center justify-between'>
              <p className='text-4xl font-black '>
                {progress.activeProjects} Projects
              </p>
              <span className='m-4 flex items-center rounded-lg bg-orange-100 p-8'>
                <Projects width={100} height={100} />
              </span>
            </span>
          </div>
        );
      })}
    </div>
  );
}

export default TasksCard;
