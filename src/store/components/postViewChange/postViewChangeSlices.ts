import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IPostViewChange } from "../../../utils/types/postViewChange";

const initialState: IPostViewChange = {
    view: "main-view",
    postId: undefined
  };
  
  const viewChange = createSlice({
    name: "viewChange",
    initialState,
    reducers: {
      setView: (
        state: IPostViewChange,
        action: PayloadAction<IPostViewChange>
      ) => {
        state.view = action.payload.view;
        state.postId = action.payload.postId
      },
    },
  });
  
  const { reducer, actions } = viewChange;
  export const { setView } = actions;
  export default reducer;