import 'dotenv/config';

import { io } from './server';

io.on('connection', (socket) => {
  console.log(`Client connected: ${socket.id}`);

  socket.on('disconnect', () => {
    console.log(`Client disconnected: ${socket.id}`);
  });
});

io.listen(parseInt(process.env.SOCKET_PORT || "3001"));
console.log(`Socket server listening on port ${process.env.SOCKET_PORT || "3001"}`);


