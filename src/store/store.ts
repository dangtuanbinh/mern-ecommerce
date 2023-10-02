import {
  configureStore,
  isRejectedWithValue,
  MiddlewareAPI,
  Middleware,
} from "@reduxjs/toolkit";
import authReducer, { userLogout } from "../pages/Login/authSlice";
import { authApi } from "../pages/Login/authApi";
import postViewChangeReducer from "../store/components/postViewChange/postViewChangeSlices";
import dialogReducer from "../store/components/customDialog/dialogSlice";
import fileUploadReducer from "../store/components/fileUpload/fileUploadSlice";

import userReducer from "../store/user/userSlice";

const rootReducer = {
  auth: authReducer,
  [authApi.reducerPath]: authApi.reducer,
  postViewChange: postViewChangeReducer,
  dialog: dialogReducer,
  user: userReducer,
  fileUpload: fileUploadReducer,
};
const rtkQueryErrorLogger: Middleware =
  (api: MiddlewareAPI) => (next) => (action) => {
    if (isRejectedWithValue(action)) {
      console.log("rtkQueryErrorLogger", action);
      // unauthorized
      if (action.payload.status === 401) {
        api.dispatch(userLogout());
        window.location.href = "/auth";
      }
    }
    return next(action);
  };

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat([rtkQueryErrorLogger, authApi.middleware]),
});

export default store;
