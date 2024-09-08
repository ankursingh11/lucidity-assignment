
import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    showEditProductModal: false,
  },
  reducers: {
    toggleEditModal: (state, action) => {
      state.showEditProductModal = !state.showEditProductModal;
    },
    closeEditModal : (state, action) => {
        state.showEditProductModal = false;
    }
  },
});

export const { toggleEditModal, closeEditModal } = modalSlice.actions;
export default modalSlice.reducer;
