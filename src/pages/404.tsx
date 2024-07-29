import React, { useEffect } from 'react';

import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';

export default function NotFound() {
  useEffect(() => {
    const { pathname } = window.location;
    const newUrl = `${AppConfig.url}${pathname}`;
    window.location.replace(newUrl);
  }, []);

  return (
    <div className="flex h-screen items-center justify-center bg-transparent">
      <Meta
        title={AppConfig.title}
        description={AppConfig.description}
        refresh={false}
      />
      <span className="mr-2 text-white">Website migrado a</span>
      <a href={AppConfig.url} className="text-white">
        {AppConfig.url}
      </a>
    </div>
  );
}
