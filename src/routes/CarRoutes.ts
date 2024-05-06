import express from "express";
// import { CarImageConfig } from "../config/multer";
import { allCars, createCar, getOneCar } from "../controller/CarController";
import CarImageConfig from "../config/multer";



const carRouter = express.Router()

carRouter.post("/createcar", CarImageConfig, createCar);
carRouter.get("/getonecar/:carId", getOneCar);
carRouter.get("/getallcars", allCars);

export default carRouter;

