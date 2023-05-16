import { useInfiniteQuery } from '@tanstack/react-query';
import { useMemo } from 'react';

import { getPeopleGoogleContacts } from 'services/endpoints/peopleGoogle';
import { Connection } from 'types/peopleGoogle';

interface IUseGetPeopleGoogleContacts {
  length?: number;
  token: string;
  enabled?: boolean;
}

export function useGetPeopleGoogleQuery({
  length = 1,
  token,
  enabled = true,
}: IUseGetPeopleGoogleContacts) {
  async function handleGetPeopleContacts({
    pageParam = '',
    signal,
  }: {
    pageParam: string;
    signal?: AbortSignal;
  }) {
    const response = await getPeopleGoogleContacts(
      {
        length,
        pageToken: pageParam,
        token,
      },
      signal
    );

    return response?.data;
  }

  const {
    data,
    error,
    isError,
    isLoading,
    isSuccess,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ['peopleGoogle', { token, length }],
    queryFn: async ({ pageParam, signal }) => {
      return handleGetPeopleContacts({ pageParam, signal });
    },
    getNextPageParam: (lastPage) => {
      if (!lastPage?.nextPageToken) return null;

      return lastPage?.nextPageToken;
    },
    enabled,
  });

  const contacts = useMemo(() => {
    const mappedContacts = new Map<string, Connection>();
    data?.pages?.forEach((page) =>
      page?.connections?.forEach((item) =>
        mappedContacts.set(String(item.resourceName), item)
      )
    );
    return Array.from(mappedContacts.values());
  }, [data]);

  return {
    contacts,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    isError,
    isLoading,
    isSuccess,
    status,
  };
}
