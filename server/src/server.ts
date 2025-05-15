import { ServerToClientEvents } from "shared/events/server-to-client";
import { ClientsToServerEvents } from "shared/events/client-to-server";

import { DefaultEventsMap, Server } from "socket.io";

const io = new Server<ServerToClientEvents, ClientsToServerEvents, DefaultEventsMap>({
    serveClient: false,
    cors: {
        origin: process.env.CORS_ORIGIN || "http://localhost:5173",
    },
});

export default io;
