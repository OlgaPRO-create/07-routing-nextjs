import { QueryClient, HydrationBoundary, dehydrate } from '@tanstack/react-query';

import fetchNotes from '@/lib/api';
import NoteDetailsClient from './Notes.client';

const Notes = async () => {
  const queryClient = new QueryClient();

  const searchWord = '';
  const page = 1;

  await queryClient.prefetchQuery({
    queryKey: ['myNoteHubKey', searchWord, page],
    queryFn: () => fetchNotes(searchWord, page),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NoteDetailsClient />
    </HydrationBoundary>
  );
};

export default Notes;
