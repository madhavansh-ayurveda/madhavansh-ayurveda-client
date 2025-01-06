import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "@/types";
import Cookies from "js-cookie";

interface TempUser {
  name: string | undefined;
  email?: string;
  contact?: string;
}

interface AuthState {
  user?: User | TempUser | null;
  token?: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error?: string | null;
  consultationId: string[] | undefined;
}

const initialState: AuthState = {
  user: null,
  token: localStorage.getItem("token"),
  isAuthenticated: false,
  isLoading: false,
  error: null,
  consultationId: undefined,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    loginSuccess: (
      state,
      action: PayloadAction<{ user: User; token: string }>
    ) => {
      state.isLoading = false;
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.error = null;
      localStorage.setItem("token", action.payload.token);
    },
    loginFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
      state.isAuthenticated = false;
      state.user = null;
      state.token = null;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      state.error = null;
      state.consultationId = undefined;
      localStorage.removeItem("token");
      Cookies.remove("authToken");
      Cookies.remove("token");
    },
    updateUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    storeTempUser: (state, action: PayloadAction<TempUser>) => {
      state.user = action.payload;
    },
    clearTempUser: (state) => {
      if (state.user && "contact" in state.user) {
        const tempUser = state.user as TempUser;
        tempUser.name = undefined;
        tempUser.contact = undefined;
      }
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  logout,
  updateUser,
  clearTempUser,
  storeTempUser,
} = authSlice.actions;
export default authSlice.reducer;
