import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoController } from './todo/todo/todo.controller';
import { UserModule } from './user/user.module';
import { CommentsModule } from './comments/comments.module';
import { CommentService } from './comment/comment.service';

@Module({
  imports: [UserModule, CommentsModule],
  controllers: [AppController, TodoController],
  providers: [AppService, CommentService],
})
export class AppModule {}
