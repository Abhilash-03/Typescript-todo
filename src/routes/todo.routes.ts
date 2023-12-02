import express from "express";
import { addTodo, getTodo } from "../controllers/todo.controllers";

const router = express.Router();


router.route('/').get(getTodo).post(addTodo);


export default router