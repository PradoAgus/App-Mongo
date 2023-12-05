import net from "node:net";
import dotenv from "dotenv";
dotenv.config();

let port = process.env.PORT ?? 3334;

const serverTCP = net.createServer();

serverTCP.on("connection", (socket) =>{
    socket.on("data",(bufferData) =>{
        const data = JSON.parse(bufferData.toString());
        console.log(data);
    });
    socket.on("close",() =>{
        console.log("Cliente desconectado");
    });
    socket.on("error",() =>{
        console.log("Error");
    });


    console.log("Cliente conectado", new Date().toLocaleString());
});


serverTCP.listen(port, () =>{
    console.log("Servidor en escucha", port, new Date().toLocaleString());
});