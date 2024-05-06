"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import dbConfig from "./config/db";
const db_1 = __importDefault(require("./config/db"));
const app_1 = __importDefault(require("./app"));
const app = (0, express_1.default)();
(0, app_1.default)(app);
(0, db_1.default)().then(() => {
    const port = 2024;
    app.listen(port, () => {
        console.log(`Server listening on port ${port}`);
    });
}).catch((error) => {
    console.error("An error occurred while configuring the database:", error);
});
// const port = 2024
// app.listen(port, () => {
//     console.log(`server listening on ${port}`)
// });
