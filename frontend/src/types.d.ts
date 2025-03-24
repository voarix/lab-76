export interface IMessage {
  id: string;
  message: string;
  author: string;
  datetime: string;
}

export interface IMessageMutation {
  author: string;
  message: string;
}
