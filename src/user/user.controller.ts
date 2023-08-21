import { Controller,Get,Param,Post,Body } from '@nestjs/common';
import { get } from 'http';

@Controller('user')
export class UserController {
    @Get(':id')
    find_all(@Param("id") id:string){
        return {user:{
            id: id,
        }};
    }
    @Post()
    create(@Body('name') name:string){
        return "the user name is " + name;
    }

}
