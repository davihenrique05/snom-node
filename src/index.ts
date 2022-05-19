import * as dotenv from "dotenv";
import "reflect-metadata";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import { routes } from "./routes";

//App config
dotenv.config();
const app = express();
const port = process.env.PORT;
app.use(cors());
app.use(helmet());
app.use(express.json());


//Default route
app.get('/', (req, res) =>{
    res.send('Uhuu');
});

app.use('/api/user', routes);
//Starting server
app.listen(port, () => console.log(`Listening to the port ${port}`));