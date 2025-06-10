import type { Socket } from "socket.io-client";

import { messageSchema } from "shared/validation/message";

export class MessageListeners {
  private socket: Socket;

  constructor(socket: Socket) {
    this.socket = socket;
    this.initListeners();
  }

  private initListeners = () => {
    this.socket.on("hello", this.hello);
  };

  private hello = (message: string) => {
    try {
      if (!messageSchema.safeParse(message).success) {
        throw new Error("Invalid message format");
      }
      console.log(`Socket ${this.socket.id} has received a hello event - ${message}`);
    } catch (error) {
      console.error(error);
    }
  }
}