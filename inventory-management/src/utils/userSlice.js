import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    isAdmin: true,
  },
  reducers: {
    toggleAdmin: (state, action) => {
      state.isAdmin = !state.isAdmin;
    },
  },
});

export const { toggleAdmin } = userSlice.actions;
export default userSlice.reducer;
