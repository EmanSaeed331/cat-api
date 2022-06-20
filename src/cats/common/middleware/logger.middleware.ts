import { Injectable , NestMiddleware } from "@nestjs/common";
import { NextFunction,Response , Request} from "express";

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
    use(req:Request, res:Response,next:NextFunction){
        console.log('Request...')
        next();
    }
}