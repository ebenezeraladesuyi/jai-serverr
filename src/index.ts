import express, { Application } from "express";
// import dbConfig from "./config/db";
import dbConfig from "./config/db"
import appConfig from "./app";


const app: Application = express();
appConfig(app);
dbConfig().then(() => {
    const port = 2024;

    app.listen(port, () => {
        console.log(`Server listening on port ${port}`);
    });
}).catch((error) => {
    console.error("An error occurred while configuring the database:", error);
});


// const port = 2024

// app.listen(port, () => {
//     console.log(`server listening on ${port}`)
// });

