import { SocketType } from "types/socket";
import Server from "server";
import { ResponseCallback } from "shared/response/callback";
import { failure, success } from "shared/response/constructors";
import { PayloadMessage } from "shared/payloads/payload-message";

export class MessageHandler {
    io: typeof Server;
    socket: SocketType;

    constructor(io: typeof Server, socket: SocketType) {
        this.io = io;
        this.socket = socket;
        this.initHandlers();
    }

    private initHandlers = () => {
        this.socket.on("message", this.message);
        this.socket.on("message:ping", this.messagePing);
    };

    private message = (payload: PayloadMessage, callback: ResponseCallback<null>) => {
        const { message } = payload;
        try {
            console.log(`Socket ${this.socket.id} has sent a message - ${message}`);

            callback(success(null));
        } catch (error) {
            console.error(error);
            callback(failure("Error handling message"));
        }
    };

    private messagePing = (payload: PayloadMessage, callback: ResponseCallback<string>) => {
        const { message } = payload;
        try {
            console.log(`Socket ${this.socket.id} has sent a message:ping - ${message}`);
            callback(success("pong"));
        } catch (error) {
            console.error(error);
            callback(failure("Error handling message:ping"));
        }
    };
}
