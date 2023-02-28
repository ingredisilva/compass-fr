import React, { useState } from 'react';

import ProgressBar from '@/components/ProgressBar';

const projectOverviewData = [
  {
    id: 1,
    name: 'Férias no Chile',
    status: 'In progress',
    deadline: '2023-06-30',
    teamMembers: ['John Doe', 'Jane Smith'],
    progress: 40,
    link: '/projects/1',
  },
  {
    id: 2,
    name: 'Cerimonia de casamento',
    status: 'Completed',
    deadline: '2023-02-15',
    teamMembers: ['Alice Lee', 'Bob Johnson', 'Charlie Brown'],
    progress: 100,
    link: '/projects/2',
  },
  {
    id: 3,
    name: 'Graduação',
    status: 'On hold',
    deadline: '2023-09-30',
    teamMembers: ['David Kim', 'Eva Chen'],
    progress: 20,
    link: '/projects/3',
  },
];

interface Project {
  name: string;
  status: string;
  deadline: string;
  teamMembers: string[];
  completionPercentage: number;
  link: string;
}

type ProjectOverviewData = Project[];

const ProjectOverviewCard = () => {
  const [limit, setLimit] = useState(3);

  const handleShowMore = () => {
    setLimit(limit + 3);
  };

  return (
    <div className='flex flex-row flex-wrap gap-4'>
      {projectOverviewData.slice(0, limit).map((projects, index) => {
        return (
          <>
            <div
              key={index}
              className='flex flex-wrap items-center justify-between gap-4 rounded-lg border-b border-gray-300 p-2 py-2 shadow-lg'
            >
              <div className='flex flex-col gap-4 p-4 '>
                <span>
                  <p className='text-md text-2xl font-bold text-primary-orangedark'>
                    {projects.name}
                  </p>{' '}
                  <p className='text-gray-600'>Deadline: {projects.deadline}</p>{' '}
                  <p> {projects.status}</p>
                </span>
                <div className='flex items-center gap-4 rounded-full text-sm font-bold '>
                  <ProgressBar progress={projects.progress} />{' '}
                  <button className='hover:bg-bg-tealdark h-12 rounded-lg bg-primary-orangelight px-4 py-2 text-xs text-white focus:outline-none'>
                    Details
                  </button>
                </div>{' '}
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default ProjectOverviewCard;
