import express from "express";
import fileDb from "../fileDb";
import { Message } from "../types";

const messageRouter = express.Router();

messageRouter.post("/", async (req, res) => {
  const {author, message} = req.body;

  if (!message.trim() || !author.trim()) {
    res.status(400).send({error: "Author and message must be present in the request"});
    return;
  }

  const newMessage = await fileDb.addNewMessage({ author, message });
  res.send(newMessage);
});

messageRouter.get("/", async (req, res) => {
  let messages : Message[] = await fileDb.getAllMessages();
  const queryDate = req.query.datetime as string;

  if(queryDate){
    const date = new Date(queryDate);

    if (isNaN(date.getDate())) {
      res.status(400).send({error: "Incorrect date"});
      return;
    }

    messages = messages.filter(message => {
      const dateMessage = new Date(message.datetime);
      return dateMessage > date;
    });

    const lastMessages = messages.slice(-30);
    res.send(lastMessages);
  }
});

export default messageRouter;