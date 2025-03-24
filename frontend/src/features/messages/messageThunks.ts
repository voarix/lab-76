import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosApi from "../../axiosApi.ts";
import { IMessage } from "../../types";

export const fetchMessages = createAsyncThunk<IMessage[], void>(
  "message/fetchMessages",
  async () => {
      const response = await axiosApi<IMessage[]>('/messages');
      return response.data;
  }
);

