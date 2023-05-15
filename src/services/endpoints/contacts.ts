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
    `/contacts?_sort=name&_order=asc&name_like=${search}&_page=${page}&_limit=${limit}`,
    {
      signal,
    }
  );
}

export function getContactById(
  {
    contactId,
  }: {
    contactId: IContact['id'];
  },
  signal?: GenericAbortSignal
): Promise<AxiosResponse<IContact>> {
  return api.get(`/contacts/${contactId}`, {
    signal,
  });
}

export function addContact(
  {
    contact,
  }: {
    contact: Omit<IContact, 'id'>;
  },
  signal?: GenericAbortSignal
): Promise<AxiosResponse<IContact>> {
  return api.post('/contacts', contact, {
    signal,
  });
}

export function editContact(
  {
    contact,
  }: {
    contact: IContact;
  },
  signal?: GenericAbortSignal
): Promise<AxiosResponse<IContact>> {
  return api.put(`/contacts/${contact.id}`, contact, {
    signal,
  });
}

export function deleteContact(
  {
    contactId,
  }: {
    contactId: IContact['id'];
  },
  signal?: GenericAbortSignal
): Promise<AxiosResponse<IContact>> {
  return api.delete(`/contacts/${contactId}`, {
    signal,
  });
}
