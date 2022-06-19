import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';

@Injectable()
export class CatsService {
    private readonly cats:Cat[] = [];
    
    // create a new Cat 
    create(cat:Cat)
        {
        console.log(cat) 
        return this.cats.push(cat);
    }
    // get All Cats 
    findAll():Cat[]{ return this.cats}
}
