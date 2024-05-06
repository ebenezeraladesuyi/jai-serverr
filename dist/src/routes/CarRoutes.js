"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import { CarImageConfig } from "../config/multer";
const CarController_1 = require("../controller/CarController");
const multer_1 = __importDefault(require("../config/multer"));
const carRouter = express_1.default.Router();
carRouter.post("/createcar", multer_1.default, CarController_1.createCar);
carRouter.get("/getonecar/:carId", CarController_1.getOneCar);
carRouter.get("/getallcars", CarController_1.allCars);
exports.default = carRouter;
