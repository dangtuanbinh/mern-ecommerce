import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFileUpload } from "../../../utils/types/fileUpload";

interface IInitialState {
  fileList: IFileUpload[];
}

const initialState: IInitialState = {
  fileList: [],
};

const fileUpload = createSlice({
  name: "fileUpload",
  initialState,
  reducers: {
    // Get fileList list
    setfileList: (state: IInitialState, action: PayloadAction<IFileUpload>) => {
      state.fileList.push(action.payload);
    },

    // Delete selected fileList item
    deletefileList: (state: IInitialState, action: PayloadAction<number>) => {
      state.fileList.splice(action.payload, 1);
    },

    // Reset file list
    resetFileList: (state: IInitialState) => {
      state.fileList = [];
    },
  },
});

const { reducer, actions } = fileUpload;
export const { setfileList, deletefileList, resetFileList } = actions;
export default reducer;
