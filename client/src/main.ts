import socket from "./socket";
import { SocketEmitters } from "./socket/emitters/message";

let socketEmitters: SocketEmitters;
const inputMessage = document.getElementById("inputMessage") as HTMLInputElement;
const inputMessagePing = document.getElementById("inputMessagePing") as HTMLInputElement;

socket.on("connect", () => {
    console.log(`Socket ${socket.id} connected`);

    socketEmitters = new SocketEmitters(socket);
});

inputMessage!.addEventListener("keypress", (e) => {
    if (e.key == "Enter") {
        if (inputMessage.value.trim() !== "") {
            const listItem = document.createElement("li");
            listItem.textContent = socketEmitters.message(inputMessage.value);
            
            const container = document.getElementById("outputMessage");
            const orderedList = container?.querySelector("ol");
            orderedList!.appendChild(listItem);

            inputMessage.value = "";
        }
    }
});

inputMessagePing!.addEventListener("keypress", (e) => {
    if (e.key == "Enter") {
        if (inputMessagePing.value.trim() !== "") {
            const listItem = document.createElement("li");
            listItem.textContent = `Server: ${socketEmitters.messagePing(inputMessagePing.value)}`;
            
            const container = document.getElementById("outputMessagePing");
            const orderedList = container?.querySelector("ol");
            orderedList!.appendChild(listItem);

            inputMessagePing.value = "";
        }
    }
});
