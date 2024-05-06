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
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const link_1 = require("../../link");
dotenv_1.default.config();
// const uri = process.env.MONGOOSE_DB
// const dbConfig = async () : Promise<void> => {
//     try {
//         if (!uri) {
//             throw new Error("MongoDB connection URI is not defined.");
//         }
//         const con = await mongoose.connect(uri);
//         console.log(`Database connected on port ${con.connection.host}`);
//     } catch (error) {
//         console.log(`database failed to connect to database`, error)
//     }
// }
// export default dbConfig();
const dbConfig = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const con = yield mongoose_1.default.connect(link_1.uri);
        console.log(`connected to database on port ${con.connection.host}`);
    }
    catch (error) {
        console.log(`failed to connect to database`, error);
    }
});
exports.default = dbConfig;
