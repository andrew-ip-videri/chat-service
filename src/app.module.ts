import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ChatController } from './chat/chat.controller';
import { ChatService } from './chat/chat.service';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [ChatController],
  providers: [ChatService],
})
export class AppModule {}
