import { NextFunction, Request, Response } from "express";
import { CustomApiError } from "../errors";
import { StatusCodes } from "http-status-codes";

const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {

    if(err instanceof CustomApiError) {
        return res.status(err.statusCode).json({ msg: err.message });
    }

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message });

}


export default errorHandler