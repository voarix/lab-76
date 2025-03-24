import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks.ts";
import { fetchMessages } from "./messageThunks.ts";
import { selectFetchLoading, selectMessages } from "./messageSlice.ts";
import Loader from "../../components/UI/Loader.tsx";

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
        <div key={message.id}>
          {message.message} <br/>
          {message.author} <br/>
          {message.datetime} <br/>
          <hr/>
        </div>
      )))}
    </div>
  );
};

export default Messages;