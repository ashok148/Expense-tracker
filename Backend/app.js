const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require('cookie-parser')
const connectDatabase = require("./config/database");
const app = express();
const hostname = "localhost";

app.use(cors());
app.use(express.json());
app.use(cookieParser());

//config
dotenv.config({ path: './config/config.env' })

//Routes import
const user = require("./routes/UserRoutes");
app.use("/api/user", user);

//Database
connectDatabase();

//server
const PORT = process.env.PORT;
app.listen(PORT, hostname, () => {
    console.log(`Server is working on http://${hostname}:${PORT}`);
});
