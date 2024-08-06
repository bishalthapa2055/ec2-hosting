import 'dotenv/config';
import { createServer } from 'http';
import { app } from './app.js';

const start = async () => {
    console.log("Starting up........");
    const server = createServer(app);
    const PORT = process.env.ENV_PORT || 3000;
    server.listen(PORT, () => {
        console.log(`Server started at port: http://localhost:${PORT}`);
    });
}

start();
