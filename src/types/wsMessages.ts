import { User } from "./user";

export type WsMessage = BookMsg | BookMsgs;



export interface BookMsgs{
    event:"order",
    contents:string,

}
export interface BookMsg{
    event:"orders",
    contents:string,
    author:User

}