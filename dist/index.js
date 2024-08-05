"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("reflect-metadata");
const mongoose_1 = __importDefault(require("mongoose"));
const body_parser_1 = require("body-parser");
const user_routes_1 = __importDefault(require("./routes/user.routes"));
const app = (0, express_1.default)();
const port = process.env.PORT || 9999;
const dbUrl = 'mongodb://localhost/mydbmongo';
mongoose_1.default.connect(dbUrl, {});
const db = mongoose_1.default.connection;
db.on('error', console.error.bind(console, 'Mongo Connection error'));
db.once('open', () => {
    console.log("Mongo connected");
});
app.use((0, body_parser_1.json)());
app.use('/users', user_routes_1.default);
app.listen(port, () => {
    console.log(`Connection established at port ${port}`);
});
