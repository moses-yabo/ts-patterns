import { WsMessage } from "./wsMessages";
import { WebSocket } from "ws";
export class UserManager {
    private sockets:Set<WebSocket> = new Set<WebSocket>();

    addSocket(socket:WebSocket){
        this.sockets.add(socket);
    }
    removeSocket(socket:WebSocket){
        this.sockets.delete(socket);
    }
    send(socket:WebSocket,message:WsMessage){
        const data = JSON.stringify(message);
        socket.send(data);
    }

    sendAll(messages:WsMessage){
        const data = JSON.stringify(messages); 
        this.sockets.forEach((socket:WebSocket)=>{
            if (socket.readyState === socket.OPEN) {

            socket.send(data);

            }
        });
    }
}