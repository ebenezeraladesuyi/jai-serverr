import express, { Application, Request, Response } from "express";
import cors from "cors";
import carRouter from "./routes/CarRoutes";



const appConfig = (app: Application) => {
    app.use(express.json()).use(cors())

    // routes
    app.use("/car", carRouter)


    app.get("/", (req: Request, res: Response) => {
        return res.status(200).json({
            message : "get default"
        })
    })
};

export default appConfig;
