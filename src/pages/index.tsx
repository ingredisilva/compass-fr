import * as React from 'react';

import ContentPage from '@/components/ContentPage';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function HomePage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />
      <ContentPage />
    </Layout>
  );
}
