import dotenv from "dotenv";

dotenv.config();

export const PORT = 4000;

export const mongoUrl = `mongodb+srv://${process.env.DB_UserName}:${process.env.DB_Password}@pc.0oluxuf.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
