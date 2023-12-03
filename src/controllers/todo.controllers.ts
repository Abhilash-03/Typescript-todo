import { BadRequest } from "../errors";
import { Request, Response } from "express";
import { todoServices } from "../services/todo.services";
import { StatusCodes } from "http-status-codes" 

class todoController {
  // add todo controller
  addTodo = async (req: Request, res: Response) => {
 
    const { title, body } = req.body;

    if(!title || !body) {
      throw new BadRequest("Title and Body must be provided.");
    }

    const todo = await todoServices.createTodo(req.body);
    res.status(StatusCodes.CREATED).json({ todo, msg: "Todo has been created!" });

  };

  // get all todos
  getTodos = async (req: Request, res: Response) => {
 
    const todos = await todoServices.getTodos();
          
    if(todos?.length === 0) {
      throw new BadRequest("Todo list is empty!");
   }

    res.status(StatusCodes.OK).json({ todos, msg: "All Todos has been fetched!"});

  };

  // get a single todo
  getSingleTodo = async (req: Request, res: Response) => {
    const { id } = req.params;
    const todo = await todoServices.getATodo(id);
        
    if(!todo) {
      throw new BadRequest("Requested todo not found!");
   }
   
    res.status(StatusCodes.OK).json({ todo, msg: "Success" });
  }

  // update todo
  updateTodo = async (req: Request, res: Response) => {
    const { id } = req.params;
    const todo = await todoServices.updateTodo(id, req.body);
    
    if(!todo){
      throw new BadRequest("Requested todo not found!");
  }

    res.status(StatusCodes.OK).json({ todo, msg: "Todo has been updated"});
  }

  // delete todo
  deleteTodo = async (req: Request, res: Response) => {
    const { id } = req.params;
    const todo = await todoServices.deleteTodo(id);
    if(!todo){
      throw new BadRequest("Requested todo not found!");
  }
    
    res.status(StatusCodes.OK).json({ todo, msg: "Todo has been deleted"});
  }

}

export const todoControllers = new todoController();