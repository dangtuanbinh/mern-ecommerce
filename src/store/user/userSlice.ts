import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface IUser {
  role: string;
}

const initialState: IUser = {
  role: "admin",
};

const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserRole: (
      state: IUser,
      action: PayloadAction<IUser>
    ) => {
      state.role = action.payload.role;
    },
  },
});

const { reducer, actions } = user;
export const {setUserRole} = actions;
export default reducer;
