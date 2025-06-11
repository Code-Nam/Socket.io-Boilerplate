import { type PayloadMessage } from "shared/payloads/message";
import type { Response } from "shared/response";

import type { Socket } from "../socket";

export class MessageEmitters {
    private socket: Socket;

    constructor(socket: Socket) {
        this.socket = socket;
    }

    public message = (message: string): string => {
        const payload: PayloadMessage = {
            message,
        };

        this.socket.emit("message", payload, (callback: Response<null>) => {
            if (!callback.success) return callback.error;
        });

        return "Message has been sent to Server";
    };

    public messagePing = (message: string): string => {
        const payload: PayloadMessage = {
            message,
        };

        this.socket.emit("message:ping", payload, (callback: Response<string>) => {
            if (!callback.success) return callback.error;
            console.log(callback.data);
        });

        return "Check console (im lazy)";
    };
}
