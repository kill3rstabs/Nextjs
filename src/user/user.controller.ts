import { Controller,Get,Param,Post,Body } from '@nestjs/common';
import { get } from 'http';
import {CreateUserDto} from './dto/createUserDto';
import { UserService } from './user.service';
import { CommentService } from 'src/comment/comment.service';
@Controller('user')
export class UserController {
    constructor(private readonly userService:UserService,private readonly commentService:CommentService){}
    @Get(':id')
    findOne(@Param("id") id:string){
        return this.userService.findone(id)
    }   
    @Post()
    create(@Body() createUserDto:CreateUserDto){
        return createUserDto;
    }
    @Get(":id/comments")
    getUserComment(@Param("id") id:string){
        return this.commentService.findUserComments(id);
    }

}
