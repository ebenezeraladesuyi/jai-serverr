import { Request, Response } from "express";
import carModel from "../model/CarModel";
import cloudinary from "../config/cloudinary";
import bcrypt from "bcrypt";


// create car
export const createCar = async  (req: Request, res: Response) => {
    try {
        const {
            carName,
            price,
            image
        } = req.body;

        const cars = await carModel.create({
            carName,
            price,
            image
        });

        return res.status(200).json({
            message: "car created",
            data: cars,
        })
    } catch (error: any) {
        return res.status(400).json({
            message: "car failed to create",
            data: error?.message
        })
    }
}


// get one car
export const getOneCar = async (req: Request, res: Response) => {
    try {
        const oneCar = await carModel.findById(req.params.carId);

        return res.status(200).json({
            message: "one car gotten",
            data: oneCar,
        })
    } catch (error: any) {
        return res.status(400).json({
            message: "failed to get one car",
            data: error
        })
    }
}

