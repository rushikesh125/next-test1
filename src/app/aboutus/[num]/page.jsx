'use client';

import React from 'react';
import { useParams } from 'next/navigation';

const DynamicPage = () => {
  const { num } = useParams(); // "num" matches the [num] parameter
  return <div>Page no: {num}</div>;
};

export default DynamicPage;
