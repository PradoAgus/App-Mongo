import net from "node:net";
import dotenv from "dotenv";
dotenv.config();

const option = {
    port: process.env.PORT ?? 3334,
    host: process.env.HOST ?? "localhost"
};

const clientTCP = net.connect(option);

clientTCP.on("connect", () => {
    console.log("Cliente conectado");

    const args = process.argv.splice(2);
    clientTCP.write(JSON.stringify(args));

    clientTCP.end();
});