import React from 'react';

import Content from '@/components/Content';
import Dashboard from '@/components/layout/DashboardMenu';
import Header from '@/components/layout/Header';
import RankingCards from '@/components/RankingCards';

function ContentPage() {
  return (
    <>
      <Header />
      <div className='mx-10 flex gap-10'>
        <div className='flex h-full'>
          <Dashboard />
        </div>
        <div className='w-full'>
          <Content />
        </div>{' '}
        <aside className='h-full'>
          <RankingCards />
        </aside>
      </div>
    </>
  );
}

export default ContentPage;
