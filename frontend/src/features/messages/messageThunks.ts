import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosApi from "../../axiosApi.ts";
import { IMessage, IMessageMutation } from "../../types";

export const fetchMessages = createAsyncThunk<IMessage[], void>(
  "message/fetchMessages",
  async () => {
    const response = await axiosApi<IMessage[]>("/messages");
    return response.data;
  },
);

export const addNewMessage = createAsyncThunk<void, IMessageMutation>(
  "message/addNewMessage",
  async (newMessage) => {
    await axiosApi.post<IMessageMutation>("/messages", newMessage);
  },
);
