import {
  createSlice,
  createAsyncThunk,
  CaseReducer,
  Action,
  PayloadAction,
} from "@reduxjs/toolkit";

const user = localStorage.getItem("authentcation_token") || "";

interface UserState {
  user: string;
  message: string;
  status: "hasError" | "success" | "loading" | "idle";
}

const initialState: UserState = {
  user: user,
  message: "",
  status: "idle",
};

const reset: CaseReducer = () => {
  return initialState;
};

const login: CaseReducer<UserState, PayloadAction<string>> = (
  state,
  action
) => {
  state.user = action.payload;
  state.status = "success";
};

const loading: CaseReducer<UserState> = (state) => {
  state.status = "loading";
};

const failed: CaseReducer<UserState, PayloadAction<string>> = (
  state,
  action
) => {
  state.message = action.payload;
  state.status = "hasError";
};

export const userSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    reset,
    login,
    loading,
    failed,
  },
});

export const userSliceActions = userSlice.actions;

export default userSlice.reducer;
