import { useMemo } from 'react';
import { groupContactsByFirstLetter } from 'utils/contacts';

const contacts = [
  {
    id: 1,
    name: 'Alberto Silva',
  },
  {
    id: 2,
    name: 'Bruno Oliveira',
  },
  {
    id: 3,
    name: 'Breno Santos',
  },
  {
    id: 4,
    name: 'Carlos Silva',
  },
  {
    id: 5,
    name: 'Catarina Oliveira',
  },
  {
    id: 6,
    name: 'Daniel Santos',
  },
  {
    id: 7,
    name: 'Diana Silva',
  },
  {
    id: 8,
    name: 'Eduardo Oliveira',
  },
  {
    id: 9,
    name: 'Elisa Santos',
  },
  {
    id: 10,
    name: 'Fernanda Silva',
  },
  {
    id: 11,
    name: 'Felipe Oliveira',
  },
  {
    id: 12,
    name: 'Gabriela Santos',
  },
  {
    id: 13,
    name: 'Gustavo Silva',
  },
  {
    id: 14,
    name: 'Helena Oliveira',
  },
  {
    id: 15,
    name: 'Isabela Santos',
  },
  {
    id: 16,
    name: 'Igor Silva',
  },
  {
    id: 17,
    name: 'João Oliveira',
  },
  {
    id: 18,
    name: 'Juliana Santos',
  },
  {
    id: 19,
    name: 'Leonardo Silva',
  },
  {
    id: 20,
    name: 'Larissa Oliveira',
  },
  {
    id: 21,
    name: 'Marcelo Santos',
  },
  {
    id: 22,
    name: 'Mariana Silva',
  },
  {
    id: 23,
    name: 'Natalia Oliveira',
  },
  {
    id: 24,
    name: 'Nicolas Santos',
  },
  {
    id: 25,
    name: 'Olivia Silva',
  },
  {
    id: 26,
    name: 'Paulo Oliveira',
  },
  {
    id: 27,
    name: 'Patricia Santos',
  },
  {
    id: 28,
    name: 'Rafael Silva',
  },
  {
    id: 29,
    name: 'Renata Oliveira',
  },
  {
    id: 30,
    name: 'Sergio Santos',
  },
];

export function useContactList() {
  const groupedContacts = useMemo(
    () => groupContactsByFirstLetter(contacts),
    []
  );

  return { groupedContacts };
}
