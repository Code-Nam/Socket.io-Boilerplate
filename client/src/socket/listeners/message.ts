import { payloadMessageSchema, type PayloadMessage } from "shared/payloads/message";
import type { Socket } from "../socket";

export class MessageListeners {
    private socket: Socket;

    constructor(socket: Socket) {
        this.socket = socket;
        this.initListeners();
    }

    private initListeners() {
        this.socket.on("hello", this.hello);
    }

    private hello(payload: PayloadMessage) {
        try {
            const { message } = payloadMessageSchema.parse(payload);
            console.log(`Socket ${this.socket.id} has received a hello event - ${message}`);
        } catch (error) {
            console.error(error);
        }
    }
}
