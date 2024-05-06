import mongoose from "mongoose";

interface car {
    carName: string;
    price: string;
    image: string;
}

interface iCar extends car, mongoose.Document {}

const carSchema = new mongoose.Schema({
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
})

const carModel = mongoose.model<iCar>("allCars", carSchema);

export default carModel;
