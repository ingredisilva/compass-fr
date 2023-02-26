import Image from 'next/image';
import Logo from 'public/images/compasslogo.png';
import * as React from 'react';

import UnstyledLink from '@/components/links/UnstyledLink';

const links = [
  { href: '/', label: 'Route 1' },
  { href: '/', label: 'Route 2' },
];

export default function Header() {
  return (
    <header className='sticky top-0 z-50 '>
      <div className='layout flex h-14 items-center justify-between'>
        <span className='flex items-center justify-center'>
          {' '}
          <Image src={Logo} alt='Compass logo' width={40} />
          <p className='text-primary-pink text-center font-secondary'>
            COMPASS
          </p>
        </span>
        <nav>
          <ul className='flex items-center justify-between space-x-4'>
            {links.map(({ href, label }) => (
              <li key={`${href}${label}`}>
                <UnstyledLink href={href} className='hover:text-gray-600'>
                  {label}
                </UnstyledLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
