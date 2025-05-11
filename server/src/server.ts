import { DefaultEventsMap, Server } from "socket.io";

//TODO: add events client-server & server-client and socket-data types
export const io = new Server<DefaultEventsMap>({
  serveClient: false,
});