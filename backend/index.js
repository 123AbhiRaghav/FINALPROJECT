import cookieParser from "cookie-parser"
import morgan from "morgan"
import cors from "cors"
import express from "express"
import dotenv from "dotenv"
import dbConnection from "./utils/index.js"
import { errorHandler, routeNotFound } from "./middlewares/errorMiddleware.js"
import routes from "./routes/index.js"

dotenv.config()

dbConnection();

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors({
    origin: ["http://localhost:3000", "http://localhost:3001", "https://final-project-mern.netlify.app"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
})
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use(morgan("dev"));
app.use("/api", routes);

app.use(routeNotFound);
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server listening on ${PORT}`));

