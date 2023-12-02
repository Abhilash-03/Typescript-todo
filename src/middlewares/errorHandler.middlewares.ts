import { NextFunction, Request, Response } from "express";
import { CustomApiError } from "../errors";
import { StatusCodes } from "http-status-codes";

const errorHandler = (err: any, req: Request, res:Response, next:NextFunction) => {

    if(err instanceof CustomApiError) {
        return res.status(err.statusCode).json({ msg: err.message });
    }

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err });

}


export { errorHandler }