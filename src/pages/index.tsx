import React from 'react';

import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';

const Index = () => (
  <div className="flex h-screen items-center justify-center bg-transparent">
    <Meta
      title={AppConfig.title}
      description={AppConfig.description}
      refresh={true}
    />
    <span className="mr-2 text-white">Website migrado a</span>
    <a href={AppConfig.url} className="text-white">
      {AppConfig.url}
    </a>
  </div>
);

export default Index;
