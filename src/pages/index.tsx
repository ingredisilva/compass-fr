import * as React from 'react';

import Dashboard from '@/components/layout/Dashboard';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function HomePage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />
      <Dashboard />
    </Layout>
  );
}
