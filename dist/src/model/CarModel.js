"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const carSchema = new mongoose_1.default.Schema({
    carName: {
        type: String,
        required: [true, "please, enter car name"]
    },
    price: {
        type: String,
        required: [true, "please, enter car price"]
    },
    image: {
        type: String,
        required: [true, "please, upload car image"]
    },
});
const carModel = mongoose_1.default.model("allCars", carSchema);
exports.default = carModel;
