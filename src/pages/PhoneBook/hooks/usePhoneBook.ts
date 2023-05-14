import { useState } from 'react';

export function usePhoneBook() {
  const [isOpenModal, setOpenModal] = useState(false);

  return { isOpenModal, setOpenModal };
}
