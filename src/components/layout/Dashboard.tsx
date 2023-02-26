import Image from 'next/image';
import Link from 'next/link';
import Logo from 'public/images/compasslogo.png';
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
    <aside className='h-screen bg-gray-900'>
      <nav className='flex flex-col gap-4 p-8'>
        <span className='flex items-center justify-center'>
          {' '}
          <Image src={Logo} alt='Compass logo' width={40} />
          <p className='text-primary-pink text-center font-secondary'>
            COMPASS
          </p>
        </span>

        <div className='flex flex-col gap-8'>
          {dashboard.map((navItems, index) => {
            return (
              <button
                key={index}
                className='justify-starttext-left hover:orange-300 flex font-sans'
              >
                <Link href={navItems.href}>{navItems.name}</Link>
              </button>
            );
          })}
        </div>
      </nav>
    </aside>
  );
}

export default Dashboard;
