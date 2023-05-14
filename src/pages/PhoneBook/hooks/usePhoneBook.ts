import { useState } from 'react';

export function usePhoneBook() {
  const [isOpenModal, setOpenModal] = useState(false);
  const [isOpenModalEdit, setOpenModalEdit] = useState(false);

  return { isOpenModal, setOpenModal, isOpenModalEdit, setOpenModalEdit };
}
