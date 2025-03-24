import express from "express";
import fileDb from "../fileDb";

const messageRouter = express.Router();

messageRouter.post("/", async (req, res) => {
  const {author, message} = req.body;

  if (!message.trim() || !author.trim()) {
    res.status(400).send({error: "Author and message must be present in the request"});
    return
  }

  const newMessage = await fileDb.addNewMessage({ author, message });
  res.send(newMessage);
});

export default messageRouter;