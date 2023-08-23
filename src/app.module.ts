import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { CommentModule } from './comment/comment.module';
import { CommentService } from './comment/comment.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import config from 'ormconfig';
import { User } from './entities/user.entity';
@Module({ 
  imports: [UserModule, CommentModule,TypeOrmModule.forRoot({
    type: 'postgres',
    database: 'testdb',
    host: '127.0.0.1',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    entities: [User],
    synchronize: true 
  })],
  controllers: [AppController],
  providers: [AppService, CommentService],
})
export class AppModule {}
