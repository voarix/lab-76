import { IMessageMutation } from "../types";
import React, { useState } from "react";
import { Box, Button, TextField } from "@mui/material";

interface Props {
  onSubmitNewMessage: (newMessage: IMessageMutation) => void;
}

const initialForm: IMessageMutation = {
  author: "",
  message: "",
};

const MessageForm: React.FC<Props> = ({ onSubmitNewMessage }) => {
  const [form, setForm] = useState<IMessageMutation>(initialForm);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.author.trim() && form.message.trim()) {
      onSubmitNewMessage(form);
      setForm(initialForm);
    } else {
      alert("Заполните все поля");
    }
  };

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <>
      <Box component="form" onSubmit={onSubmit} sx={{ mb: 5 }}>
        <TextField
          fullWidth
          label="Author"
          name="author"
          value={form.author}
          onChange={inputChangeHandler}
          sx={{ mb: 2 }}
          required
        />

        <TextField
          fullWidth
          multiline
          rows={3}
          label="Message"
          name="message"
          value={form.message}
          onChange={inputChangeHandler}
          sx={{ mb: 2 }}
          required
        />

        <Button type="submit" fullWidth variant="outlined">
          Send
        </Button>
      </Box>
      <hr/>
    </>
  );
};
export default MessageForm;
