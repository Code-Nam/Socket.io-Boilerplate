import "dotenv/config";

import io from "./server";
import { SocketType } from "types/socket";
import { MessageHandler } from "./socket/handlers/message";

io.on("connection", (socket: SocketType) => {
    console.log(`Socket ${socket.id} connected`);

    new MessageHandler(io, socket);

    socket.on("disconnect", () => {
        console.log(`Socket ${socket.id} disconnected`);
    });
});

io.listen(parseInt(process.env.SOCKET_PORT || "3001"));
console.log(`Socket server listening on port ${process.env.SOCKET_PORT || "3001"} and cors ${process.env.CORS_ORIGIN}`);
