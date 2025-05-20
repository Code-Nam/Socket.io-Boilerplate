import { ServerToClientEvents } from "shared/events/server-to-client";
import { ClientsToServerEvents } from "shared/events/client-to-server";

import { DefaultEventsMap, Server } from "socket.io";
import { SocketData } from "#/socket-data";

const io = new Server<ServerToClientEvents, ClientsToServerEvents, DefaultEventsMap, SocketData>({
    serveClient: false,
    cors: {
        origin: process.env.CORS_ORIGIN || "http://localhost:5173",
    },
});

export default io;
