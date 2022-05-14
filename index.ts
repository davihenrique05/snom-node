import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
dotenv.config();

//App config
const app = express();
app.use(cors());
app.use(helmet());
app.use(express.json());

//Default route
app.get('/', (req, res) =>{
    res.send(
        {
            'Nome' : 'Não interessa',
            'Idade' : 'Menos ainda'
        }
    );
});

//Starting server
const port = process.env.PORT;
app.listen(port, () => console.log(`Listening to the port ${port}`));