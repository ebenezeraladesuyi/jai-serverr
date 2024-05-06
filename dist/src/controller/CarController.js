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
exports.allCars = exports.getOneCar = exports.createCar = void 0;
const CarModel_1 = __importDefault(require("../model/CarModel"));
// create car
const createCar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { carName, price, carImage } = req.body;
        const cars = yield CarModel_1.default.create({
            carName,
            price,
            carImage
        });
        return res.status(200).json({
            message: "car created",
            data: cars,
        });
    }
    catch (error) {
        return res.status(400).json({
            message: "car failed to create",
            data: error === null || error === void 0 ? void 0 : error.message
        });
    }
});
exports.createCar = createCar;
// get one car
const getOneCar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const oneCar = yield CarModel_1.default.findById(req.params.carId);
        return res.status(200).json({
            message: "one car gotten",
            data: oneCar,
        });
    }
    catch (error) {
        return res.status(400).json({
            message: "failed to get one car",
            data: error
        });
    }
});
exports.getOneCar = getOneCar;
// get all cars
const allCars = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cars = yield CarModel_1.default.find();
        return res.status(200).json({
            message: "all cars gotten",
            data: cars,
        });
    }
    catch (error) {
        return res.status(400).json({
            message: "failed to get all cars",
            data: error
        });
    }
});
exports.allCars = allCars;
