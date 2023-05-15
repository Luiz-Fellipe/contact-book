import { useQuery } from '@tanstack/react-query';
import { getContactById } from 'services/endpoints/contacts';
import { IContact } from 'types/contacts';

export function useGetContactByIdQuery({
  contactId,
  enabled,
}: {
  contactId: IContact['id'] | null;
  enabled: boolean;
}) {
  function handleGetContactById({ signal }: { signal?: AbortSignal }) {
    if (!contactId) {
      throw new Error("O 'id' do contato é obrigatório.");
    }

    const response = getContactById({ contactId }, signal);
    return response;
  }

  const {
    data: contact,
    error,
    isError,
    isLoading,
    isSuccess,
    isFetching,
    status,
  } = useQuery({
    queryKey: ['contact', { contactId }],
    queryFn: async ({ signal }) => {
      return handleGetContactById({ signal });
    },
    enabled,
  });

  return { contact, error, isError, isLoading, isSuccess, isFetching, status };
}
