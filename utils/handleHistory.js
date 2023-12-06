import fs from "node:fs"; //para modificar la base de datos
const PATH = "log/historyUser.json"; //le dice a fs dónde está la base de datos
import { randomUUID } from "node:crypto";

const readHistory = () => { //Lee el historial
    const jsonData = fs.readFileSync(PATH);
    return JSON.parse(jsonData.toString());
};

const writeHistory = (state, id) => { //Escribe en el historial
    const data = readHistory();
    const register = {
        id,
        date: new Date().toLocaleString()
    };
    if(state === "connected"){
        data.userConnection.push(register);
    }else{
        data.userDisconnected.push(register);
    }
    const jsonData = JSON.stringify(data);//Convertimos el objeto a json
    fs.writeFileSync(PATH, jsonData);
};

export {
    readHistory, writeHistory
};