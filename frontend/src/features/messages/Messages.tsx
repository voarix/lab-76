import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks.ts";
import { fetchMessages } from "./messageThunks.ts";
import { selectFetchLoading, selectMessages } from "./messageSlice.ts";
import Loader from "../../components/UI/Loader.tsx";
import MessageItem from "../../components/MessageItem.tsx";

const Messages = () => {
  const dispatch = useAppDispatch();
  const messages = useAppSelector(selectMessages);
  const fetchLoading = useAppSelector(selectFetchLoading);

  useEffect(() => {
    dispatch(fetchMessages());
  }, [dispatch]);

  return (
    <div>
      {fetchLoading ? <Loader/> : (messages.length && messages.map((message) => (
       <MessageItem key={message.id} message={message.message} author={message.author} datetime={message.datetime} />
      )))}
    </div>
  );
};

export default Messages;