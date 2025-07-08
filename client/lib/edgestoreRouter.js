import { initEdgeStore } from '@edgestore/server';

const es = initEdgeStore.create();

export const edgeStoreRouter = es.router({
  publicFiles: es.fileBucket(),
});
