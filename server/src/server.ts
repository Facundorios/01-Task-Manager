import express, { Application } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import { connectDB } from './config/connectDB';

export class Server {
    private app: Application;
    private port: number;

    constructor() {
        this.app = express();
        this.port = Number(process.env.PORT) || 3000;
        this.connectDB();
    }

    async connectDB() {
        await connectDB();
    }

    middlewares() {
        this.app.use(express.json());
        this.app.use(cors({
            origin: "http://localhost:5173",
            credentials: true,
        }));
        this.app.use(morgan('dev'));
        this.app.use(cookieParser());
    }

    Listen() {
        this.app.listen(this.port, () => {
            console.log(`Server running on port http://localhost:${this.port}`);
        });
    }
}