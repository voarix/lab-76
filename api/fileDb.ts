import { promises as fs } from "fs";
import { Message, MessageMutation } from "./types";
import { existsSync } from "node:fs";

const fileName = "./messages.json";
let data: Message[] = [];

const fileDb = {
  async init() {
    try {
      if (!existsSync(fileName)) {
        await fs.writeFile(fileName, JSON.stringify([]));
      } else {
        const fileContent = await fs.readFile(fileName);
        data = JSON.parse(fileContent.toString()) as Message[];
      }
    } catch (e) {
      data = [];
      console.error(e);
    }
  },
  async getAllMessages() {
    return data;
  },
  async addNewMessage(messageToAdd: MessageMutation) {
    const newMessage = {id: crypto.randomUUID(), datetime: new Date().toISOString(), ...messageToAdd};
    data.push(newMessage);
    await this.save();
    return newMessage;
  },
  async save() {
    return fs.writeFile(fileName, JSON.stringify(data));
  },
};

export default fileDb;