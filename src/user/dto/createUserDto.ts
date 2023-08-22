import { from } from "rxjs";
import {IsEmail,IsString,IsNumberString} from "class-validator";
export class CreateUserDto{
    @IsString() 
        name:string;
    @IsEmail()    
        email:string;
    @IsNumberString()
        phone:string;
}