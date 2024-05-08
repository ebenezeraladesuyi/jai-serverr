import mongoose from "mongoose";

interface car {
    carName: string;
    price: string;
    carImage: File | null;
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
    carImage: {
        type: String,
        // required: [true, "please, upload car image"]
    },
})

const carModel = mongoose.model<iCar>("allCars", carSchema);

export default carModel;
