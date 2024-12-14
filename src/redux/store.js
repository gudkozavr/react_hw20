import { configureStore } from "@reduxjs/toolkit";
import users from "../redux/slices/userSlice";
export const store = configureStore({
  reducer: {
    users,
  },
});
