import { CustomApiError } from "./customApiError";
import { StatusCodes } from "http-status-codes";

class BadRequest extends CustomApiError {
    statusCode: number
    constructor(message: string) {
        super(message);
        this.statusCode = StatusCodes.BAD_REQUEST
    }
}

export { BadRequest }