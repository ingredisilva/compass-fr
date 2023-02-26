import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const dashboard = [
  {
    name: 'Finances',
    href: '',
    icon: '',
  },
  {
    name: 'Projects',
    href: '',
    icon: '',
  },
  {
    name: 'Education',
    href: '',
    icon: '',
  },
  {
    name: 'Sleep Data',
    href: '',
    icon: '',
  },
  {
    name: 'Goals',
    href: '',
    icon: '',
  },
  {
    name: 'Fitness',
    href: '',
    icon: '',
  },
  {
    name: 'CompassPoints',
    href: '',
    icon: '',
  },
];

function Dashboard() {
  return (
    <aside className='m-4 h-3/4 rounded-full bg-primary-orangemd p-8'>
      <nav className='flex flex-col'>
        <div className='flex flex-col gap-8'>
          {dashboard.map((navItems, index) => {
            return (
              <>
                <button>
                  <Image src='' />
                </button>
                <button
                  key={index}
                  className='flex justify-start font-primary text-sm text-primary-orangelight hover:bg-orange-300'
                >
                  <Link href={navItems.href} className=''>
                    {navItems.name}
                  </Link>
                </button>
              </>
            );
          })}
        </div>
      </nav>
    </aside>
  );
}

export default Dashboard;
