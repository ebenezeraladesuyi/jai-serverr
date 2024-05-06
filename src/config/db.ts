import mongoose from "mongoose";
import dotenv from "dotenv";
import {uri} from "../../link";

dotenv.config();


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

const dbConfig = async (): Promise<void> => {
    try {
      const con = await mongoose.connect(uri);
      console.log(`connected to database on port ${con.connection.host}`);
    } catch (error) {
      console.log(`failed to connect to database` , error);
    }
  };
  
  export default dbConfig;