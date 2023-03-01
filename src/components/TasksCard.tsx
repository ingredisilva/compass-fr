import Projects from 'public/svg/projects.svg';
import React from 'react';

const userProgressData = [
  {
    userid: '',
    username: '',
    project: 'Immigration',
    completedProjects: 6,
    hoursOfSleep: 1435,
    workOuts: 577,
    description:
      'The projects section should have a list of all the users ongoing and completed projects',
  },
];

function TasksCard() {
  return (
    <div className='relative flex items-center rounded-2xl  bg-teal-100 shadow-2xl'>
      {userProgressData.map((progress, index) => {
        return (
          <div key={index} className='flex flex-col items-center gap-4 p-4'>
            <span className=''>
              <p className='text-left text-lg font-semibold'>Your Projects</p>{' '}
              <button className='top absolute right-8 -m-4 mt-1 h-10 w-10 items-center rounded-3xl text-4xl font-bold hover:bg-gray-100'>
                <p className='-mt-6'>...</p>
              </button>
            </span>
            <div className=''>
              <span className='flex items-center gap-4 rounded-lg'>
                <Projects width={30} height={30} />
                <p className='text-2xl font-black '>{progress.project}</p>
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default TasksCard;
