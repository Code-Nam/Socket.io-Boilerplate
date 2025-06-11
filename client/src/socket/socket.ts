import { io, Socket as SocketIO } from "socket.io-client";
import type { ClientsToServerEvents } from "shared/events/client-to-server";
import type { ServerToClientEvents } from "shared/events/server-to-client";


const socketUrl = import.meta.env.VITE_SOCKET_URL || "http://localhost:3001";
const socket: Socket = io(socketUrl);

export type Socket = SocketIO<ServerToClientEvents, ClientsToServerEvents>;
export default socket;