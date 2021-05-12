"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const socket_io_1 = require("socket.io");
const http_1 = __importDefault(require("http"));
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    const app = express_1.default();
    const server = http_1.default.createServer(app);
    const io = new socket_io_1.Server(server, {
        cors: {
            origin: "*",
            methods: ["GET", "POST"],
        }
    });
    app.use(cors_1.default());
    const PORT = process.env.PORT || 4000;
    app.get('/', (req, res) => {
        res.send('<h1> Hello World </h1>');
    });
    io.on('connection', (socket) => {
        socket.emit('ME', socket.id);
        socket.on('DISCONNECT', () => {
            socket.broadcast.emit("CALL_ENDED");
        });
        socket.on("CALL_USER", ({ userToCall, signalData, from, name }) => {
            io.to(userToCall).emit("CALL_USER", { signal: signalData, from, name });
        });
        socket.on("ANSWER_CALL", (data) => {
            io.to(data.to).emit("CALL_ACCEPTED");
        });
    });
    server.listen(PORT, () => {
        console.log('App is listening on port 4000.');
    });
});
main().catch((error) => {
    console.error(`error: ${error}`);
});
//# sourceMappingURL=index.js.map