import express from "express";
import { todoControllers } from "../controllers/todo.controllers";

const router = express.Router();


router.route('/').post(todoControllers.addTodo).get(todoControllers.getTodos);

router.route('/:id').get(todoControllers.getSingleTodo).patch(todoControllers.updateTodo).delete(todoControllers.deleteTodo);


export default router