import { useInfiniteQuery } from '@tanstack/react-query';

import { useMemo } from 'react';

import { getContacts } from 'services/endpoints/contacts';
import { IContact } from 'types/contacts';
import { parseHeaderLinks, parsePaginationData } from 'utils/jsonServer';

interface IUseGetContacts {
  length?: number;
  filters?: {
    search: string;
  };
}

export function useGetContactsInfinityQuery({
  length = 1,
  filters,
}: IUseGetContacts) {
  async function handleGetContacts({
    pageParam = 1,
    signal,
  }: {
    pageParam: number;
    signal?: AbortSignal;
  }) {
    const response = await getContacts(
      {
        limit: length,
        page: pageParam,
        search: filters?.search,
      },
      signal
    );

    const links = parseHeaderLinks(response.headers.link);
    const pagination = parsePaginationData(pageParam, links);

    return {
      data: response.data,
      currentPage: pageParam,
      pagination,
    };
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
    queryKey: ['contacts', { filters }],
    queryFn: async ({ pageParam, signal }) => {
      return handleGetContacts({ pageParam, signal });
    },
    getNextPageParam: (lastPage) => {
      if (!lastPage?.pagination) return null;

      return lastPage?.pagination?.last ? null : lastPage.currentPage + 1;
    },
  });

  const contacts = useMemo(() => {
    const mappedContacts = new Map<string, IContact>();
    data?.pages?.forEach((page) =>
      page?.data?.forEach((item) => mappedContacts.set(String(item.id), item))
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
