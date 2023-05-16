import axios, { AxiosResponse, GenericAbortSignal } from 'axios';
import { IPeopleGoogleContact } from 'types/peopleGoogle';

export function getPeopleGoogleContacts(
  {
    token,
    pageToken,
    length,
  }: {
    token: string;
    pageToken?: string;
    length: number;
  },
  signal?: GenericAbortSignal
): Promise<AxiosResponse<IPeopleGoogleContact>> {
  return axios.get(
    `https://people.googleapis.com/v1/people/me/connections?personFields=names,phoneNumbers,emailAddresses,addresses&pageSize=${length}&sortOrder=FIRST_NAME_ASCENDING&pageToken=${pageToken}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      signal,
    }
  );
}
