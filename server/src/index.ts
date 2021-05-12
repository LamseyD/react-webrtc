import express from 'express';
import cors from 'cors';
import { Server } from 'socket.io';
import http from 'http';

const main = async () => {
    const app = express();
    const server = http.createServer(app);
    const io = new Server(server, {
        cors: {
            origin: "*",
            methods: ["GET", "POST"],
        }
    });
    app.use(cors());

    const PORT = process.env.PORT || 4000;

    //@ts-ignore
    app.get('/', (req, res) => {
        res.send('<h1> Hello World </h1>');
    });

    io.on('connection', (socket) => {
        socket.emit('ME', socket.id);
        socket.on('DISCONNECT', () => {
            socket.broadcast.emit("CALL_ENDED");
        })
        socket.on("CALL_USER", ({ userToCall, signalData, from, name }) => {
            io.to(userToCall).emit("CALL_USER", { signal: signalData, from, name });
        })
        socket.on("ANSWER_CALL", (data) => {
            io.to(data.to).emit("CALL_ACCEPTED")
        })
    })

    server.listen(PORT, () => {
        console.log('App is listening on port 4000.');
    });
}

main().catch((error) => {
    console.error(`error: ${error}`)
})