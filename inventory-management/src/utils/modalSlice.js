
import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    showEditProductModal: false,
    dataIndex : 0
  },
  reducers: {
    toggleEditModal: (state, action) => {
      state.showEditProductModal = !state.showEditProductModal;
    },
    closeEditModal : (state, action) => {
        state.showEditProductModal = false;
    },
    setDataIndex : (state, action) => {
        state.dataIndex = action.payload;
    }
  },
});

export const { toggleEditModal, closeEditModal, setDataIndex } = modalSlice.actions;
export default modalSlice.reducer;
