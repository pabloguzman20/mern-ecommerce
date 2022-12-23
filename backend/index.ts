import express, { Express, Request, Response } from 'express';
import cors from "cors";
import { router } from './src/router';
import { connectDatabase } from './src/config/MongoConnector';

const app: Express = express();
const port: number = Number(process.env.PORT) || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

connectDatabase();
app.use(router);

app.get("/", (req: Request, res: Response): void => {
    res.status(200).send({ message: "MERN STACK" });
})

app.listen(port, (): void => {
    console.log(`Server is listening on port:`, port);
});