import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks.ts";
import { addNewMessage, fetchMessages } from "./messageThunks.ts";
import { selectFetchLoading, selectMessages } from "./messageSlice.ts";
import Loader from "../../components/UI/Loader.tsx";
import MessageItem from "../../components/MessageItem.tsx";
import MessageForm from "../../components/MessageForm.tsx";
import { IMessageMutation } from "../../types";

const Messages = () => {
  const dispatch = useAppDispatch();
  const messages = useAppSelector(selectMessages);
  const fetchLoading = useAppSelector(selectFetchLoading);

  useEffect(() => {
    dispatch(fetchMessages());
  }, [dispatch]);

  const onSubmitNewMessage = async (newMessage: IMessageMutation) => {
    await dispatch(addNewMessage(newMessage));
    await dispatch(fetchMessages());
  };

  const reversedMessages = [...messages].reverse();

  return (
    <div>
      <MessageForm onSubmitNewMessage={onSubmitNewMessage} />
      {fetchLoading ? (
        <Loader />
      ) : (
        reversedMessages.length &&
        reversedMessages.map((message) => (
          <MessageItem
            key={message.id}
            message={message.message}
            author={message.author}
            datetime={message.datetime}
          />
        ))
      )}
    </div>
  );
};

export default Messages;
