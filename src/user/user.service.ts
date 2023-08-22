import { Injectable } from '@nestjs/common';

@Injectable()
 export class UserService {
    findone(id:string){
        return
            {id:id}
     }
}