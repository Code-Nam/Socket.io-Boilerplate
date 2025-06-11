import { SocketType } from "types/socket";
import Server from "server";
import { ResponseCallback } from "shared/response/callback";
import { failure, success } from "shared/response/constructors";
import { payloadMessageSchema, type PayloadMessage } from "shared/payloads/message";

export class MessageHandler {
    io: typeof Server;
    socket: SocketType;

    constructor(io: typeof Server, socket: SocketType) {
        this.io = io;
        this.socket = socket;
        this.initListeners();
    }

    private initListeners = () => {
        this.socket.on("message", this.message);
        this.socket.on("message:ping", this.messagePing);
    };

    private message = (payload: PayloadMessage, callback: ResponseCallback<null>) => {
        try {
            const { message } = payloadMessageSchema.parse(payload);
            console.log(`Socket ${this.socket.id} has sent a message - ${message}`);

            callback(success(null));
        } catch (error) {
            console.error(error);
            callback(failure("Error handling message"));
        }
    };

    private messagePing = (payload: PayloadMessage, callback: ResponseCallback<string>) => {
        try {
            const { message } = payloadMessageSchema.parse(payload);
            console.log(`Socket ${this.socket.id} has sent a message:ping - ${message}`);
            callback(success("pong"));
        } catch (error) {
            console.error(error);
            callback(failure("Error handling message:ping"));
        }
    };

    public hello = (message: string) => {
        const payload: PayloadMessage = {
            message,
        };

        this.socket.emit("hello", payload);
        console.log(`Socket ${this.socket.id} has sent ${message}`);
    };
}
