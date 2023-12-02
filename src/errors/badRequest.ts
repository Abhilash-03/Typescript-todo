import { CustomApiError } from "./customApiError";
import { StatusCodes } from "http-status-codes";

class BadRequest extends CustomApiError {
    constructor(message: string, statusCode: number) {
        super(message, statusCode);
        this.statusCode = StatusCodes.BAD_REQUEST
    }
}

export { BadRequest }