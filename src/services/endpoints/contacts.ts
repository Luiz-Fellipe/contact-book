import { AxiosResponse, GenericAbortSignal } from 'axios';

// SERVICES
import api from 'services/api';

// TYPES
import { IContact } from 'types/contacts';

export function getContacts(
  {
    page,
    limit,
    search,
  }: {
    page: number;
    limit: number;
    search?: string;
  },
  signal?: GenericAbortSignal
): Promise<AxiosResponse<IContact[]>> {
  return api.get(
    `/contacts?_page=${page}&_limit=${limit}&name_like=${search}&_sort=name&_order=asc`,
    {
      signal,
    }
  );
}
