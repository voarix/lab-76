import { IMessage } from "../../types";
import { createSlice } from "@reduxjs/toolkit";
import { fetchMessages } from "./messageThunks.ts";
import { RootState } from "../../app/store.ts";

interface MessageState {
  items: IMessage[];
  fetchLoading: boolean;
  error: boolean;
}

const initialState: MessageState = {
  items: [],
  fetchLoading: false,
  error: false,
};

const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMessages.pending, (state) => {
        state.fetchLoading = true;
        state.error = false;
      })
      .addCase(fetchMessages.fulfilled, (state, {payload: messages}) => {
        state.items = messages;
        state.fetchLoading = false;
      })
      .addCase(fetchMessages.rejected, (state) => {
        state.fetchLoading = false;
        state.error = true;
      });
  }
});

export const selectMessages = (state: RootState) => state.message.items;
export const selectFetchLoading = (state: RootState) => state.message.fetchLoading;
export const selectError = (state: RootState) => state.message.error;

export const messageReducer = messageSlice.reducer;