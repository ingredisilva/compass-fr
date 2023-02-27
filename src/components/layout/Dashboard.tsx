import Link from 'next/link';
import Education from 'public/svg/education.svg';
import Goals from 'public/svg/goals.svg';
import Finance from 'public/svg/graph.svg';
import Projects from 'public/svg/projects.svg';
import Settings from 'public/svg/settings.svg';
import SleepData from 'public/svg/sleep.svg';
import CompassPoints from 'public/svg/star.svg';
import Todo from 'public/svg/todo.svg';
import React from 'react';

const dashboard = [
  {
    name: 'Finances',
    href: '',
    icon: <Finance width={20} height={20} />,
  },
  {
    name: 'Projects',
    href: '',
    icon: <Projects width={20} height={20} />,
  },
  {
    name: 'Education',
    href: '',
    icon: <Education width={20} height={20} />,
  },
  {
    name: 'Sleep Data',
    href: '',
    icon: <SleepData width={20} height={20} />,
  },
  {
    name: 'Goals',
    href: '',
    icon: <Goals width={20} height={20} />,
  },
  {
    name: 'Todo',
    href: '',
    icon: <Todo width={20} height={20} />,
  },
  {
    name: 'CompassPoints',
    href: '',
    icon: <CompassPoints width={20} height={20} />,
  },
];

function Dashboard() {
  return (
    <aside className='m-10 h-3/4 rounded-3xl bg-slate-50 p-2 shadow-2xl'>
      <nav className='flex h-full flex-col justify-between p-3'>
        <div className='flex w-full flex-col gap-2 '>
          {dashboard.map((navItems, index) => {
            return (
              <>
                <button
                  key={index}
                  className='flex w-full items-center rounded-2xl p-2 font-primary text-sm text-gray-800 hover:bg-slate-100'
                >
                  {navItems.icon}
                  <Link href={navItems.href} className='mx-4 font-semibold '>
                    {navItems.name}
                  </Link>
                </button>
              </>
            );
          })}
        </div>{' '}
        <button className='mt-10 flex items-center justify-center gap-1 rounded-xl bg-orange-200 p-1 font-semibold'>
          <Settings alt='' width={20} height={30} />
          Settings
        </button>
      </nav>
    </aside>
  );
}

export default Dashboard;
