import express from "express";
import { CarImageConfig } from "../config/multer";
import { createCar, getOneCar } from "../controller/CarController";



const carRouter = express.Router()

carRouter.post("/createcar", CarImageConfig, createCar);
carRouter.get("/getonecar:carId", getOneCar);

export default carRouter;

