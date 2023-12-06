import net from "node:net";
import dotenv from "dotenv";
import { writeHistory } from "../utils/handleHistory.js";
import { randomUUID } from "node:crypto";
dotenv.config();

const port = process.env.PORT ?? 3334;

const serverTCP = net.createServer();

serverTCP.on("connection", (socket) =>{
    const id = randomUUID();

    socket.on("data",(bufferData) =>{
        const data = JSON.parse(bufferData.toString());
        console.log(data);
    });
    socket.on("close",() =>{
        console.log("Cliente desconectado");
        writeHistory("disconnected", id);
    });
    socket.on("error",() =>{
        console.log("Error");
    });


    console.log("Cliente conectado", new Date().toLocaleString());
        writeHistory("connected", id);
});


serverTCP.listen(port, () =>{
    console.log("Servidor en escucha", port, new Date().toLocaleString());
});