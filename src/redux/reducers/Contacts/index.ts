import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

// TYPES
import { IContactsStates } from './types';

const initialState: IContactsStates = {
  openModalAddContact: false,
  openModalEditContact: {
    value: false,
    contactId: null,
  },
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    onOpenModalAddContact: (
      state,
      action: PayloadAction<IContactsStates['openModalAddContact']>
    ) => {
      state.openModalAddContact = action.payload;
    },
    onOpenModalEditContact: (
      state,
      action: PayloadAction<IContactsStates['openModalEditContact']>
    ) => {
      state.openModalEditContact = action.payload;
    },
  },
});

export const { onOpenModalAddContact, onOpenModalEditContact } =
  contactsSlice.actions;

export default contactsSlice.reducer;
