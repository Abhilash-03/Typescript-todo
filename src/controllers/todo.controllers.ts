import { BadRequest } from "../errors"
import { Request, Response } from "express"

const addTodo = async (req: Request, res: Response) => {
  try {
     res.status(201).send(req.body)
  } catch (error) {
    console.log(error)
    throw new BadRequest("Something went wrong", 400);
  }
}

const getTodo =  async (req: Request, res: Response) => {
    try{
     res.status(200).send('Message is successfully fetched!!');
    } catch(error){
        console.log(error);
        throw new BadRequest("Nothing to get.", 400);
    }
}

export {
    addTodo,
    getTodo
}