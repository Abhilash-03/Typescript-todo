import dotenv from "dotenv";
import "express-async-errors";
import express from "express";
import connectDB from "../config/db.config";
import todoRouter from '../routes/todo.routes'
import errorHandler  from "../middlewares/errorHandler.middlewares";
import cors from 'cors';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send("<h1>Todo List using typescript</h1>");
})


// routes
app.use('/api/v1/todos', todoRouter);

// middleware
app.use(errorHandler);

const startDB = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        console.log('Mongodb is connected!!!')
        app.listen(port, () => {
            console.log(`Server is listening on port ${port}...`);
        })
    } catch (error) {
        console.log(error);
    }
}
// connecting to mongodb and starting the server
startDB();