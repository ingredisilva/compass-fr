import React from 'react';

import Content from '@/components/Content';
import Dashboard from '@/components/layout/Dashboard';
import Header from '@/components/layout/Header';
import RankingCards from '@/components/RankingCards';

function ContentPage() {
  return (
    <>
      <Header />
      <div className='flex h-full'>
        <div className='flex h-full'>
          <Dashboard />
        </div>
        <div className='w-full '>
          <Content />
        </div>{' '}
        <aside>
          <RankingCards />
        </aside>
      </div>
    </>
  );
}

export default ContentPage;
