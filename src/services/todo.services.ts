import { Todo } from "../models/todo.models";

export class todoService {
    // create a todo
    createTodo = async (data: any) => {
        const newTodo = await Todo.create(data);
        return newTodo;
    }

//    get all todos 
     getTodos = async () => {
            const todos = await Todo.find({}).sort('-createdAt');
            return todos;
     }

    //  get a single todo
    getATodo = async (id: string) => {
            const todo = await Todo.findById({_id: id});
            return todo;
    }

    // update todo
    updateTodo = async (id: string, data: any) => {
            const updatedTodo = await Todo.findByIdAndUpdate({_id: id}, data, {new: true});
            return updatedTodo;
    }

    // delete todo
     deleteTodo = async (id: string) => {
            const deletedTodo = await Todo.findByIdAndDelete({_id: id});
            return deletedTodo;
    }
}

export const todoServices = new todoService();