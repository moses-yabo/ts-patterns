import { IncomingMessage } from "http";
import { ServerOptions,WebSocket,WebSocketServer,RawData } from "ws";
import { UserManager } from "./types/userManager";
import { WsMessage } from "./types/wsMessages";


export class WsHandler{
    private wsServer:WebSocketServer = new WebSocketServer() ;
    private userManager:UserManager = new UserManager();

    initialize(option:ServerOptions){
        this.wsServer = new WebSocketServer();
        this.userManager = new UserManager();

        this.wsServer.on("listening",()=>console.log(`SERVER LISTENING ON PORT ${option}`));
        this.wsServer.on("connection",(socket:WebSocket,request:IncomingMessage)=>this.onConnect(socket,request))
    }

    onConnect(socket:WebSocket,request:IncomingMessage){
        console.log(`new web Socket connection`);

        this.userManager.addSocket.bind(socket);

        socket.on("message",(data:RawData)=>{this.onMessage(socket,data)});

        
    }
    onMessage(socket:WebSocket,data:RawData){
        const payload:WsMessage = JSON.parse(`${data}`);
        console.log(`Received `,payload);
        
        this.userManager.send(socket,{event:"order",contents:"awe"});
        
        
    }
    onDisConnect(socket:WebSocket,code:number,reason:Buffer){
    this.userManager.removeSocket(socket);
    }
}  
