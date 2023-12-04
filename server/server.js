import net from "node:net";
import dotenv from "dotenv";
dotenv.config();

let port = process.env.PORT ?? 3334;

const serverTCP = net.createServer();

serverTCP.on("connection", (socket) =>{
    socket.on("data",() =>{
        console.log("Recibiendo datos");
    });
    socket.on("close",() =>{
        console.log("Cliente desconectado");
    });
    socket.on("error",() =>{
        console.log("Error");
    });


    console.log("Cliente conectado");
});


serverTCP.listen(port, () =>{
    console.log("Servidor en escucha", port, new Date().toLocaleString());
});