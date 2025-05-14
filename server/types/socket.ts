import { ServerToClientEvents } from "shared/events/server-to-client";
import { ClientsToServerEvents } from "shared/events/client-to-server";

import { DefaultEventsMap, Socket } from "socket.io";

export type SocketType = Socket<DefaultEventsMap, ServerToClientEvents, ClientsToServerEvents>;