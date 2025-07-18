'use client';

import { createEdgeStoreProvider } from '@edgestore/react';
import { edgeStoreRouter } from './edgestoreRouter'; // ✅ now valid

const { EdgeStoreProvider, useEdgeStore } = createEdgeStoreProvider({
  router: edgeStoreRouter,
});

export { EdgeStoreProvider, useEdgeStore };
