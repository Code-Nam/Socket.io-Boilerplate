import "dotenv/config";

import io from "./server";
import { SocketType } from "types/socket";
import { MessageHandler } from "./socket/handlers/message";
import { ExtendedError } from "socket.io";
import { TokenUtils } from "./auth/tokenUtils";
import { logger } from "./logger";

io.use((socket: SocketType, next: (error?: ExtendedError) => void) => {
    //* setup middleware before connection event if needed
    // const tokenUtils: TokenUtils = new TokenUtils();
    // next();
});

io.on("connection", (socket: SocketType) => {
    logger.info(`Socket ${socket.id} connected`);

    const messageHandler: MessageHandler = new MessageHandler(io, socket);

    messageHandler.hello("Hello from server");

    socket.on("disconnect", () => {
        logger.info(`Socket ${socket.id} disconnected`);
    });
});

io.listen(parseInt(process.env.SOCKET_PORT || "3001"));
console.log(`Socket server listening on port ${process.env.SOCKET_PORT || "3001"} and cors ${process.env.CORS_ORIGIN}`);
