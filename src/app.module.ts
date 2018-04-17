import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import {CatsController} from './cat.controller';

@Module({
  imports: [],
  controllers: [AppController,CatsController],
  components: [],
})
export class AppModule {}
