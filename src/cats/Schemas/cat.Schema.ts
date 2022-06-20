import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import * as mongoose from "mongoose";
import { Cat } from "../interfaces/cat.interface";

export type Document = Cat & mongoose.Document;
@Schema()
export class Product {

    @Prop()
    name: string;

    @Prop()
    manufacturer: string;

    @Prop()
    manufactureYear: number;
}

export const createCatSchema = SchemaFactory.createForClass(Product);