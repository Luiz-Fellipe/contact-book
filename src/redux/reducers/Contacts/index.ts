import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

// TYPES
import { IContactsStates } from './types';

const initialState: IContactsStates = {
  openModal: false,
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    onOpenModal: (state, action: PayloadAction<boolean>) => {
      state.openModal = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { onOpenModal } = contactsSlice.actions;

export default contactsSlice.reducer;
