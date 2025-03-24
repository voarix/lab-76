import { configureStore } from "@reduxjs/toolkit";
import { messageReducer } from "../features/messages/messageSlice.ts";

export const store = configureStore({
  reducer: {
    message: messageReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
