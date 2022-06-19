import { Body, Controller, Get, Head, Header, HttpCode, Post, Query, Redirect, Req } from '@nestjs/common';
import { Request } from 'express';
import { version } from 'os';
import { CreateCatDTO } from 'src/DTO/create-cat.dto';

@Controller('cats' )
export class CatsController {
    @Get('cats')
    findAll():string { return 'This action returns all cats '}
    findAllWithReq (@Req() request:Request):string {
        return 'This action returns all catsWith a req';
    }

    // Redirect 
    @Get('NestMeow')
    @Redirect('https://nestjs.com',301)

    @Post('/')
    @HttpCode(204) // 204 is no content status code 
    @Header('Cache-Control' , 'none')
    create() :string{
        return ' This add new Meow '
    }
    // Get Nest doc 
    @Get ('docs')
    @Redirect('https://docs.nestjs.com', 302)
    getDocs(@Query ('version')version )
    {
        if (version && version === '5'){
            return { url : 'https://docs.nestjs.com/v5/'}
        }
    }

    @Post('/createNewCat')
    async createNewMeow(@Body() createCatDto:CreateCatDTO){
        return 'This  action adds a new Cat'; 
    }
}

