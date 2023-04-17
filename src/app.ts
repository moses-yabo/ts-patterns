import { json } from "body-parser";
import express,{Request,Response,NextFunction} from "express";
import todoRoutes from "./routes/todo";
import { ServerOptions } from "ws";
import { WsHandler } from "./ws-handler";
import { WsMessage} from "./types/wsMessages";
const entryProgram = ()=>{

    const option:ServerOptions = {port:1998};
    const handler = new WsHandler();
    handler.initialize(option);



}
entryProgram()
const app = express();

app.use(json())
app.use('/todos',todoRoutes);
app.use((err:Error,req:Request,res:Response,next:NextFunction)=>{
res.status(400).json({message:err.message,status:'failed'})
})

