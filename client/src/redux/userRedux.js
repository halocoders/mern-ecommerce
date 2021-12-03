import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    currentUser: localStorage.getItem('user')
      ? JSON.parse(localStorage.getItem('user'))
      : null,
    loading: false,
    error: false,
  },
  reducers: {
    loginStart: (state) => {
      state.loading = true;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.currentUser = action.payload;
      localStorage.setItem('user', JSON.stringify(action.payload));
    },
    loginFailure: (state) => {
      state.loading = false;
      state.error = true;
    },
    logOut: (state, action) => {
      state.loading = false;
      state.currentUser = action.payload;
      localStorage.setItem('user', JSON.stringify(action.payload));
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logOut } =
  userSlice.actions;
export default userSlice.reducer;
