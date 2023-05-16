import { IContact } from 'types/contacts';
import { Connection } from 'types/peopleGoogle';

/**
 * Converte os dados fornecidos em um formato específico.
 * @param datas - Os dados no formato de entrada.
 * @returns Os dados convertidos no formato de saída.
 */
export function convertGoogleContactToContact(datas: Connection[]): IContact[] {
  return datas.map((data) => {
    const name =
      data.names?.[0]?.displayName ||
      data.phoneNumbers[0]?.value.replace(/\D/g, '');

    const email = data.emailAddresses?.[0]?.value || '';

    const phones = data.phoneNumbers
      ? data.phoneNumbers.map((phoneNumber, id) => ({
          id: id + 1,
          number: phoneNumber.value || '',
        }))
      : [{ id: 1, number: '' }];

    const addresses = data.addresses
      ? data.addresses.map((address, id) => ({
          id: id + 1,
          address: `${address.streetAddress || 'não informado'} - ${
            address.countryCode || ''
          }`,
        }))
      : [{ id: 1, address: '' }];

    return {
      id: data.resourceName || '',
      name,
      email,
      phones,
      addresses,
    };
  });
}
