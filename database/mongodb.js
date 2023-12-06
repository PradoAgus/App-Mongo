import { MongoClient } from "mongodb"; //Permite crear un cliente que va a manipular la bd
import dotenv from "dotenv";
dotenv.config();

const uriDB = process.env.URI_DB;

const clientMongo = new MongoClient(uriDB);

const createConnectionMongo = async () => {
    await clientMongo.connect();
    console.log("Conexión a la base de datos establecida.");
};

createConnectionMongo();