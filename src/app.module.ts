import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {CatsController} from './cat.controller';
import {CatsService} from './cats.service';

@Module({
    imports: [],
    controllers: [AppController, CatsController],
    components: [CatsService],
})
export class AppModule {
}
