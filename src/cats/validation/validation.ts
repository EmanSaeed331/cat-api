import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from "@nestjs/common";
import { ObjectSchema } from "joi";

@Injectable()
// Custom Pipe 
export class JoiValidationPipe implements PipeTransform { 
    constructor(private schema:ObjectSchema){}
    transform(value: any, metadata: ArgumentMetadata) {
        const { error } = this.schema.valid(value);
        if (error) throw new BadRequestException('Validation Failed');
        return value; 
    }
  
}