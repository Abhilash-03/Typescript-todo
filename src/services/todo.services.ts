import { BadRequest } from "../errors";
import { Todo } from "../models/todo.models";

export class todoService {
    // create a todo
    createTodo = async (data: any) => {
        try{
            const newTodo = await Todo.create(data);
            return newTodo;
        } catch(error) {
            console.log(error);
        }
    }

//    get all todos 
     getTodos = async () => {
        try {
            const todos = await Todo.find({});
            return todos
        } catch (error) {
            console.log(error);
        }
     }

    //  get a single todo
    getATodo = async (id: string) => {
        try {
            const todo = await Todo.findById({_id: id});
            if(!todo) {
                throw new BadRequest("Todo is not available", 400);
            }
            return todo;

        } catch (error) {
            console.log(error);
            
        }
    }

    // update todo
    updateTodo = async (id: string, data: any) => {
        try {
            const updatedTodo = await Todo.findByIdAndUpdate({_id: id}, data, {new: true});

            if(!updatedTodo){
                throw new BadRequest("Todo is not available", 400);
            }
            return updatedTodo;

        } catch (error) {
            console.log(error);
            
        }
    }

    // delete todo
     deleteTodo = async (id: string) => {
         try {
            const deletedTodo = await Todo.findByIdAndDelete({_id: id});

            if(!deletedTodo){
                throw new BadRequest("Todo is not available", 400);
            }

         } catch (error) {
            console.log(error);
            
         }
    }
}

export const todoServices = new todoService();