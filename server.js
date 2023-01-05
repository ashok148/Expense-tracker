const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDatabase = require("./src/config/database");
const app = express();
const hostname = "localhost";
const cookieParser = require('cookie-parser')
app.use(cookieParser())
app.use(cors());
app.use(express.json());


//config
dotenv.config({ path: './src/config/config.env' })

//Routes import
const user = require("./src/routes/UserRoutes");
const expense = require("./src/routes/expenseRoutes");
app.use("/api/user", user);
app.use("/api/expense", expense);


//Database
connectDatabase();

//server
const PORT = process.env.PORT;
app.listen(PORT, hostname, () => {
    console.log(`Server is working on http://${hostname}:${PORT}`);
});
